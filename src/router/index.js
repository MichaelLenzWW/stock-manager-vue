import Vue from "vue";
import Router from "vue-router";
import Welcome from "@/components/welcome/Welcome";
import Ticker from "@/components/tickerlist/TickerListComponent";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/Welcome",
      name: "Welcome",
      component: Welcome
    },
    {
      path: "/Ticker",
      name: "Ticker",
      component: Ticker
    }
  ]
});
