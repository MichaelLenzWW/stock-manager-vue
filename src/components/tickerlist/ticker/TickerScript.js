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

  beforeMount() {
    this.fetchOrders();
  },
  methods: {
    async fetchOrders() {
      this.isLoading = true;
      this.orderList = [];
      try {
        this.orderList = await this.stockService.fetchOrdersByStockId(this.stock.id);
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
    }
  }
};
