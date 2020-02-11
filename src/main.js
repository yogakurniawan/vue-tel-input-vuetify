/* eslint-disable import/no-extraneous-dependencies */

import Vue from 'vue';
import App from './App.vue';
import VueTelInput from './components/vue-tel-input-vuetify.vue';

Vue.config.productionTip = false;

Vue.component('vue-tel-input-vuetify', VueTelInput);

new Vue({
  render: h => h(App),
}).$mount('#app');
