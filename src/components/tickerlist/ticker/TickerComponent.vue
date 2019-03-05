<template>
  <div>
    <br>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span :class="$style.stockTitle">{{stock.symbol}} - {{stock.name}}</span>
        <div style="float: right;">
          <el-button icon="el-icon-plus" size="mini" type="primary" @click="onBuyClicked">Buy</el-button>
          <el-button icon="el-icon-minus" size="mini" type="primary" @click="onSellClicked">Sell</el-button>
          <el-button
            v-if="orderList.length === 0"
            icon="el-icon-delete"
            size="mini"
            type="primary"
            @click="onDeleteClicked"
          >Delete</el-button>
        </div>
        <order-dialog
          v-show="showOrderDialog"
          :showOrderDialog.sync="showOrderDialog"
          :stock.sync="stock"
          @cancel="showOrderDialog=false"
          @confirm="onConfirmOrderClicked"
          @close="showOrderDialog=false"
        ></order-dialog>
      </div>

      <el-table
        :data="orderList"
        :row-style="tableRowStyle"
        :cell-style="tableCellStyle"
        :stripe="true"
        :highlight-current-row="true"
        empty-text="No order data available."
      >style="width: 100%">
        <el-table-column label="Type" width="150">
          <template slot-scope="scope">
            <div>{{ scope.row.type}}</div>
            <div>{{ scope.row.optionType}}</div>
          </template>
        </el-table-column>

        <el-table-column prop="status" label="Status" width="110"></el-table-column>

        <el-table-column label="Purchase Date" width="170">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.purchaseDate }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Sell Date" width="170">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.sellDate}}</span>
          </template>
        </el-table-column>

        <el-table-column prop="quantity" label="Quantity" width="110"></el-table-column>
        <el-table-column prop="currency" label="Currency" width="80"></el-table-column>

        <el-table-column label="Purchase" width="110">
          <template slot-scope="scope">
            <div>{{ scope.row.purchasePrice}}</div>
            <div>{{ scope.row.purchaseProvision}}</div>
          </template>
        </el-table-column>

        <el-table-column label="Sell" width="110">
          <template slot-scope="scope">
            <div>{{ scope.row.sellPrice}}</div>
            <div>{{ scope.row.sellProvision}}</div>
          </template>
        </el-table-column>

        <el-table-column prop="profitOrLoss" label="Profit or Loss" width="110"></el-table-column>
        <el-table-column prop="strikePrice" label="Strike Price" width="110"></el-table-column>

        <el-table-column label="Strike Date" width="170">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.strikeDate}}</span>
          </template>
        </el-table-column>

        <el-table-column label="Operations">
          <template slot-scope="scope">
            <el-button
              v-if="!scope.row.sellDate"
              size="mini"
              @click="onCloseClicked(scope.$index, scope.row)"
            >Close</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script src="./TickerScript.js"></script>
<style type="scss" module src="./TickerStyle.scss"></style>
