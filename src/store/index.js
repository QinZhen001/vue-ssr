import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storeData = {
  state: {},
  mutations: {},
  actions: {},
  modules: {}
};

const store = new Vuex.Store(storeData);

export function createStore() {
  return new Vuex.Store(storeData);
}

export default store;
