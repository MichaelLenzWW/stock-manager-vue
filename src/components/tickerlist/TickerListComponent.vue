<template>
  <div>
    <el-card class="box-card">
      <el-form label-position="top" :model="form" :rules="rules" ref="form">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="Ticker Symbol" prop="symbol">
              <el-input v-model="form.symbol" placeholder="Enter Ticker Symbol..." required></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="16">
            <el-form-item label="Name" prop="name">
              <el-input v-model="form.name" placeholder="Enter Ticker Name..." required></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-button
              type="primary"
              icon="el-icon-plus"
              @click.stop="onButtonAddClicked"
            >Add Ticker</el-button>
            <el-button
              icon="el-icon-refresh"
              @click.stop="onButtonRefreshClicked"
            >Refresh Ticker List</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-card>

    <div v-loading="isLoading">
      <ticker-component v-for="stock in sortedStockList" :key="stock.symbol" :stock="stock"></ticker-component>
    </div>
  </div>
</template>
<script src="./TickerListScript.js"/>
