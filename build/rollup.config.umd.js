import base from './rollup.config.base';

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'vue-tel-input-vuetify',
    file: 'dist/vue-tel-input-vuetify.umd.js',
    format: 'umd',
  },
});

export default config;
