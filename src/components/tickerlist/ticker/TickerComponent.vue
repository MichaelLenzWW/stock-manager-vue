<template>
  <div>
    <br>
    <el-card class="box-card">
      <div slot="header" class="clearfix" :class="$style.stockTitle">
        <span>{{stock.symbol}} - {{stock.name}}</span>
        <el-button style="float: right; padding: 3px 0" type="text">Operation button</el-button>
      </div>
    </el-card>
  </div>
</template>
<script src="./TickerScript.js"></script>
<style type="scss" module src="./TickerStyle.scss"></style>
