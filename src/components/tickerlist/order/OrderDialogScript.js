import { mapGetters } from "vuex";
import Order from "@/models/Order";

export default {
  props: ["showOrderDialog", "stock"],
  data() {
    return {
      isOption: true,
      form: {
        symbol: this.stock.symbol,
        name: this.stock.name,
        purchaseDate: new Date(),
        quantity: 0,
        purchasePrice: 0,
        purchaseProvision: 0
      },
      rules: {
        purchaseDate: [{ required: true, message: "Please input purchase date.", trigger: ["blur", "change"] }],
        quantity: [{ required: true, message: "Please input quantity.", trigger: ["blur", "change"] }],
        purchasePrice: [{ required: true, message: "Please input price.", trigger: ["blur", "change"] }],
        purchaseProvision: [{ required: true, message: "Please input provision.", trigger: ["blur", "change"] }]
      }
    };
  },
  watch: {
    showOrderDialog(value) {
      if (value) {
        this.order = this.orderFromStore();
      }
    }
  },
  methods: {
    ...mapGetters(["orderFromStore"]),
    /**
     * User clicked the close icon of the dialog.
     */
    handleClose(done) {
      done();
      this.$emit("close");
    },

    onClickCancel() {
      this.$emit("cancel");
    },

    onClickConfirm() {
      this.$refs.form.validate(valid => {
        if (valid) {
          const order = new Order();
          order.purchaseDate = this.form.purchaseDate;
          order.quantity = this.form.quantity;
          // order.currency = this.form.currency;
          order.purchasePrice = this.form.purchasePrice;
          order.purchaseProvision = this.form.purchaseProvision;
          this.$emit("confirm", order);
        }
      });
    }
  }
};
