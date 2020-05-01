module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-tel-input-vuetify/'
    : '/',
  "lintOnSave": true,
  "outputDir": "./docs",
  "transpileDependencies": [
    "vuetify"
  ]
}