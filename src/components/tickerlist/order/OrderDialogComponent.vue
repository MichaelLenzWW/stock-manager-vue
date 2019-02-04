<template>
  <el-dialog title="Order" :visible="showOrderDialog" width="50%" :before-close="handleClose">
    <el-form label-position="top" :model="form" ref="form">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="Ticker Symbol" prop="symbol">
            <el-input v-model="form.symbol" disabled required></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="18">
          <el-form-item label="Name" prop="name">
            <el-input v-model="form.name" disabled required></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="Purchase Date" prop="purchaseDate" required>
            <el-date-picker
              v-model="order.purchaseDate"
              type="date"
              placeholder="Enter purchase date..."
            ></el-date-picker>
          </el-form-item>
        </el-col>

        <el-col :span="18">
          <el-form-item label="Quantity" prop="quantity" required>
            <el-input v-model="order.quantity"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="Purchase Price" prop="purchasePrice" required>
            <el-input v-model="order.purchasePrice" placeholder="Enter purchase price..."></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="6">
          <el-form-item label="Purchase Provision" prop="purchaseProvision" required>
            <el-input v-model="order.purchaseProvision" placeholder="Enter purchase provision..."></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-switch v-model="isOption" active-text="Option" inactive-text="Share"></el-switch>
        </el-col>
      </el-row>
    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button @click="onClickCancel">Cancel</el-button>
      <el-button type="primary" @click="onClickConfirm">Confirm</el-button>
    </span>
  </el-dialog>
</template>
<script>
import { mapGetters } from "vuex";
import Order from "@/models/Order";

export default {
  props: ["showOrderDialog", "stock"],
  data() {
    return {
      isOption: true,
      order: new Order(),
      form: {
        symbol: this.stock.symbol,
        name: this.stock.name
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
      this.$emit("confirm");
    }
  }
};
</script>
