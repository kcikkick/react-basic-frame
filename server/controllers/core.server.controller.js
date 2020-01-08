const CONFIG = require('../../config');

const renderPage = (req, res, views, title) => {
  res.render(views, {
    ENV: CONFIG.ENV,
    delimiter: '#',
    htmlWebpackPlugin: {
      title: `DEMO - ${title}`,
    },
  });
};

exports.renderHomePage = function (req, res) {
  renderPage(req, res, 'index', 'Home Page');
};