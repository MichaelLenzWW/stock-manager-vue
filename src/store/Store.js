import Vue from "vue";
import Vuex from "vuex";
import OrderStore from "@/store/modules/OrderStore.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    OrderStore
  }
});
