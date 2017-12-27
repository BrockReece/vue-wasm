import Vue from 'vue';

const extractModule = async (module) => {
  const { instance } = await module();
  return instance.exports;
};

export default async (vue, options = {}) => {
  Vue.prototype.$wasm = {};
  await Object.keys(options.modules)
    .forEach(async (key) => {
      const extracted = await extractModule(options.modules[key]);
      Vue.prototype.$wasm[key] = extracted;
    });
  await Vue.nextTick();
};
