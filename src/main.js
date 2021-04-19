import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import filters from "./filters.js";
import methods from "./methods.js";

Vue.config.productionTip = false;

new Vue({
  router,
  filters,
  methods,
  render: h => h(App)
}).$mount("#app");
