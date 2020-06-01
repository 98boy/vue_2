import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

// state 数据存放
const state = {
  // 一般为多个组件共享的数据
  count: 0,
};

// mutations 直接修改数据行为
const mutations = {
  increment(state) {
    state.count++;
  },
  decrement(state) {
    state.count--;
  },
};

// actions 用户在组件中的行为
const actions = {
  increment(context) {
    context.commit("increment");
  },
  decrement(context) {
    context.commit("decrement");
  },
  IncrementIfOdd(context) {
    if (context.state.count % 2 === 1) {
      context.commit("increment");
    }
  },
  incrementAsync(context) {
    setTimeout(() => {
      context.commit("increment");
    }, 1000);
  },
};

// getters 根据状态数据计算出的数据方法
const getters = {
  currentCount(state) {
    return state.count * 4;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
