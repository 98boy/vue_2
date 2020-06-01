import Vue from "vue";
import App from "@/App";
// import "@babel/polyfill";
new Vue({
  beforeCreate() {
    // 全局事件总线
    Vue.prototype.$bus = this;
  },
  el: "#root",
  render: (h) => h(App),
});
