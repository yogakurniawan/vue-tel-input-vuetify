import utils, { defaultOptions } from './utils';
import VueTelInputVuetify from './vue-tel-input-vuetify.vue';

export function install(Vue, customOptions = {}) {
  if (install.installed) return;
  if (!customOptions || !customOptions.vuetify) {
    return;
  }
  const { vuetify: vuetifyFramework } = customOptions;
  install.installed = true;
  install.vuetify = vuetifyFramework;
  utils.options = {
    ...defaultOptions,
    ...customOptions,
  };
  Vue.use(vuetifyFramework);
  Vue.component('vue-tel-input-vuetify', VueTelInputVuetify);
}

export { VueTelInputVuetify };

const plugin = {
  install,
};

// Auto-install
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export default plugin;
