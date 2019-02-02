<template>
  <div>
    <br>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span :class="$style.stockTitle">{{stock.symbol}} - {{stock.name}}</span>
        <el-button style="float: right; padding: 3px 0" type="text">Operation button</el-button>
      </div>

      <el-table :data="orderList" style="width: 100%">
        <el-table-column prop="type" label="Type" width="180"></el-table-column>
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
        <el-table-column prop="purchasePrice" label="Purchase Price" width="110"></el-table-column>

        <el-table-column prop="sellPrice" label="Sell Price" width="110"></el-table-column>
        <el-table-column prop="purchasePrice" label="Purchase Provision" width="110"></el-table-column>
        <el-table-column label="Sell Provision" width="110">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.sellProvision}}</span>
          </template>
        </el-table-column>
        <el-table-column label="Strike Price" width="110">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.strikePrice}}</span>
          </template>
        </el-table-column>

        <el-table-column label="Currency" width="100">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.currency}}</span>
          </template>
        </el-table-column>

        <el-table-column label="Strike Date" width="170">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.strikeDate}}</span>
          </template>
        </el-table-column>
      </el-table>
      <ul v-for="order in orderList" :key="order.id">
        <li>{{order}}</li>
      </ul>
    </el-card>
  </div>
</template>
<script src="./TickerScript.js"></script>
<style type="scss" module src="./TickerStyle.scss"></style>
