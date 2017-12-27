// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueWasm from './wasm';

import add from './assets/wasm/add.wasm';

Vue.config.productionTip = false;

const init = async () => {
  await VueWasm(Vue, { modules: { add } });
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
  });
};

init();
