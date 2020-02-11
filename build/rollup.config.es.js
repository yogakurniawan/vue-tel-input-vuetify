import base from './rollup.config.base';

const config = Object.assign({}, base, {
  output: {
    name: 'vue-tel-input-vuetify',
    file: 'dist/vue-tel-input-vuetify.esm.js',
    format: 'es',
  },
  external: [
    'libphonenumber-js',
  ],
});

export default config;
