<template>
  <el-dialog title="Order" :visible="showOrderDialog" width="50%" :before-close="handleClose">
    <el-form label-position="top" :model="form" :rules="rules" ref="form">
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
              v-model="form.purchaseDate"
              type="date"
              placeholder="Enter purchase date..."
            ></el-date-picker>
          </el-form-item>
        </el-col>

        <el-col :span="18">
          <el-form-item label="Quantity" prop="quantity" required>
            <el-input v-model="form.quantity"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="Purchase Price" prop="purchasePrice" required>
            <el-input v-model="form.purchasePrice" placeholder="Enter purchase price..."></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="6">
          <el-form-item label="Purchase Provision" prop="purchaseProvision" required>
            <el-input v-model="form.purchaseProvision" placeholder="Enter purchase provision..."></el-input>
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
<script src="./OrderDialogScript.js"/>
