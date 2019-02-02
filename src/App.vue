<template>
  <div id="app">
    <el-menu
      :default-active="menu.defaultActive"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="menu.router"
    >
      <el-menu-item index="1" route="Welcome">Welcome</el-menu-item>
      <el-menu-item index="2" route="Ticker">Ticker</el-menu-item>
      <el-menu-item index="3">Stocks</el-menu-item>
    </el-menu>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return { menu: { router: true, defaultActive: "1" } };
  },
  methods: {
    handleSelect() {}
  }
};
</script>
