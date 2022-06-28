import App from '@/App'
import uView from "@/plugins/uView"
import "@/config/.env"
import Vue from 'vue'
import store from '@/store/index.js'


import ConfirmDialog from "@/components/common/confirmDialog.vue";
import LoadingDialog from "@/components/common/loadingDialog.vue";
import AlertDialog from "@/components/common/alertDialog.vue";
Vue.prototype.$store = store

Vue.component("m-confirm-dialog", ConfirmDialog);
Vue.component("m-loading-dialog", LoadingDialog);
Vue.component("m-alert-dialog", AlertDialog);
Vue.prototype.$systemInfo = uni.getSystemInfoSync()
Vue.mixin({
  methods: {
    show_confirm: function(obj) {
      obj.show = true;
      this.$store.commit("show_confirm_dialog", obj);
    },
    show_loading: function() {
      this.$store.commit("set_loading", true);
    },
    hide_loading: function() {
      this.$store.commit("set_loading", false);
    },
    show_alert(obj, type = "info") {
      if (typeof obj === "string") {
        obj = { title: obj, type: type };
      }
      this.$store.commit("show_alert_dialog", obj);
    }
  }
});
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App,
	uView
})
app.$mount()