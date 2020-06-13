import Vue from 'vue'
import App from './app.vue'
import './registerServiceWorker'
import router from './routeur'
import store from './store'
import Ionic from '@ionic/vue';
import Vuelidate from 'vuelidate'
import '@ionic/core/css/ionic.bundle.css';

Vue.use(Ionic);
Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
