import Vue from "vue";
import App from "@/App.vue";
import store from "@/store";
import router from "@/router";
import request from "@/plugins/request";
import platform from "@danielpiva/platform/dist";
import "@/registerServiceWorker";
import "@/assets/styles.css";

Vue.config.productionTip = false;

Vue.use(request);
Vue.use(platform);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
