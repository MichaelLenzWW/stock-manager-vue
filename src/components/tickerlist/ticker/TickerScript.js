import StockService from "@/service/StockService.js";
export default {
  props: ["stock"],
  data() {
    return {
      isLoading: false,
      stockService: new StockService(),
      orderList: []
    };
  },

  mounted() {
    this.fetchOrders();
  },
  methods: {
    /**
     *
     * @param {*} index
     * @param {*} row
     */
    onCloseClicked(index, row) {},

    /**
     *
     */
    async onDeleteClicked() {
      try {
        await this.stockService.delteTickerSymbol(this.stock.id);
        this.$emit("delete");
        this.$notify.error({
          duration: 0,
          type: "info",
          title: "Info",
          message: "Ticker successfully deleted."
        });
      } catch (error) {
        this.$notify.error({
          duration: 0,
          type: "error",
          title: "Error",
          message: error.message
        });
      }
    },

    /**
     *
     * @param {*} param0
     */
    tableRowStyle({ row, rowIndex }) {
      // Open orders will be displayed with green background
      if (!row.sellDate) {
        return " background: #f0f9eb;";
      }
      return "";
    },

    tableCellStyle({ row, column, rowIndex, columnIndex }) {
      // Positive profit or loss will be colored green, negative profit or loss will be colored red
      if (column.property === "profitOrLoss") {
        if (row.profitOrLoss) {
          return row.profitOrLoss < 0 ? "color:red" : "color:green";
        }
      }
    },
    /**
     *
     */
    async fetchOrders() {
      this.isLoading = true;
      this.orderList = [];
      try {
        this.orderList = await this.stockService.fetchOrdersByStockId(this.stock.id);
        this.calculateOrderInformation();
      } catch (error) {
        this.$notify.error({
          duration: 0,
          type: "error",
          title: "Error",
          message: error.message
        });
      } finally {
        this.isLoading = false;
      }
    },
    /**
     *
     */
    calculateOrderInformation() {
      this.orderList.forEach(order => {
        order.profitOrLoss = this.calculateProfitOrLoss(order);
      });
    },
    /**
     * Calculates profit or loss from the given order.
     *
     * @param {*} order the order to calculate profit or loss
     *
     * @returns {Number} the profit or loss of the given order
     */
    calculateProfitOrLoss(order) {
      // Expired options are purchase price - purchase provision
      if (order.type === "STOCK_OPTION" && order.purchaseDate && order.status === "EXPIRED") {
        return order.purchasePrice * (order.quantity * -1) * 100 - order.purchaseProvision;
      }

      // Sold orders are delta of sell/purchase price *quantity - provisions
      if (order.sellDate) {
        return (order.sellPrice - order.purchasePrice) * order.quantity - (order.sellProvision + order.purchaseProvision);
      }
      return 0;
    }
  }
};
