// setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://example.com', // Replace with the base URL of your API
      changeOrigin: true,
    })
  );
};
