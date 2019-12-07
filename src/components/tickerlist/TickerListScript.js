import StockService from "@/service/StockService.js";
import TickerComponent from "./ticker/TickerComponent.vue";
import { NotificationUtil } from "../../utils/NotificationUtil";

export default {
  name: "Ticker",
  components: { TickerComponent },
  data() {
    return {
      notificationUtil: new NotificationUtil(this),
      isLoading: false,
      stockService: new StockService(),
      stockList: [],
      form: {
        symbol: "",
        name: ""
      },
      rules: {
        symbol: [
          {
            required: true,
            message: "Ticker symbol must be entered.",
            trigger: "blur"
          }
        ],
        name: [
          {
            required: true,
            message: "Ticker name must be entered.",
            trigger: "blur"
          }
        ]
      }
    };
  },
  beforeMount() {
    this.fetchTickerSymbols();
  },
  computed: {
    sortedStockList() {
      let sortBySymbol = this.stockList.slice(0);
      sortBySymbol.sort(function(a, b) {
        const x = a.symbol.toLowerCase();
        const y = b.symbol.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      });
      return sortBySymbol;
    }
  },
  methods: {
    onDelete() {
      this.fetchTickerSymbols();
    },

    onButtonAddClicked() {
      this.$refs.form.validate((isValid, invalidFields) => {
        if (isValid) {
          this.addTickerSymbol();
        }
      });
    },

    onButtonRefreshClicked() {
      this.fetchTickerSymbols();
    },

    /**
     * Add the entered ticker symbol to the database.
     */
    async addTickerSymbol() {
      this.isLoading = true;
      try {
        await this.stockService.addTickerSymbol(
          this.form.symbol,
          this.form.name
        );
        this.notificationUtil.sendSuccessMessage("Ticker symbol added.");
        this.fetchTickerSymbols();
      } catch (error) {
        this.notificationUtil.sendErrorMessage(error.message);
      } finally {
        this.isLoading = false;
      }
    },

    /**
     * Retrieves the list of ticker symbols from the database.
     */
    async fetchTickerSymbols() {
      this.isLoading = true;
      this.stockList = [];
      try {
        this.stockList = await this.stockService.fetchTickerSymbols();
      } catch (error) {
        this.notificationUtil.sendErrorMessage(error.message);
      } finally {
        this.isLoading = false;
      }
    }
  }
};
