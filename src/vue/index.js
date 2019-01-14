import Vue from 'vue';
import App from './App';

import JasonBorder from './plugin';

Vue.use(JasonBorder);

new Vue({
  render: h => h(App)
}).$mount('#app');