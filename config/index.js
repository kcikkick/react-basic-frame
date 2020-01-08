const path = require('path');
const BASE_DIR = path.join(__dirname, '../');

const CONFIG = {
  PORT: process.env.PORT || 3435,
  ENV: process.env.ENV || 'DEV',
  ROOT_DOMAIN: process.env.ROOT || '',
  LOG_DIR: process.env.LOG_DIR || 'D:\\gvvmc_log',
  VERSION: process.env.VERSION || 'DEV',
  build: {
    basePath: BASE_DIR,
    assetsPublicFolder: 'dist',
    assetsPublicPath: path.join(BASE_DIR, 'dist'),
    assetsRootPath: '/dist',
  },
  proxyTable: {
    '/api/dom': {
      target: process.env.API_DOM_HOST_BASE || 'http://localhost:3436',
      changeOrigin: true,
      pathRewrite: {
        '^/api/dom': '/api/dom',
      },
    },
  },
};

module.exports = CONFIG;