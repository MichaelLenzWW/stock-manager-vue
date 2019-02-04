import Order from "@/models/Order";

const state = {
  currentOrder: new Order()
};

const getters = {
  orderFromStore(state) {
    return state.currentOrder;
  }
};

const mutations = {
  updateOrder(state, payload) {
    state.currentOrder = payload;
  }
};

const actions = {
  updateOrder({ commit }, payload) {
    commit("updateOrder", payload);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
