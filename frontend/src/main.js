import Vue from "vue";
// Vue.config.devtools = true

//BootstrapVue
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

Vue.prototype.$axios = axios;

axios.defaults.baseURL = "http://localhost:8000"; //バックエンド側のIPとポート
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["Content-Type"] =
  "application/json;charset=utf-8";
axios.defaults.headers.common["Access-Control-Allow-Origin"] =
  // "https://pplmtv-gymlog.link";
  "http://localhost:80";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
