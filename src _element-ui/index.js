import Vue from "vue";
import App from "@/App";
// import "@babel/polyfill";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
new Vue({
  beforeCreate() {
    // 全局事件总线
    Vue.prototype.$bus = this;
  },
  el: "#root",
  render: (h) => h(App),
});
