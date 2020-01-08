const CONFIG = require('../config');
const path = require('path');
const express = require('express');
const proxyMiddleware = require('http-proxy-middleware');
const morgan = require('morgan');
const rfs = require('rotating-file-stream');

const chalk = require('chalk');
const graceful = require('graceful');
const packageInfo = require('../package.json');

class App {
  constructor () {
    this.port = CONFIG.PORT;
    this.app = express();
    this.server = null;
  }

  start () {
    this.initExpress();
    this.run();
  }

  run(){
    const serverUrl = `${process.env.NODE_ENV === 'secure' ? 'https://' : 'http://'}` + `localhost:${CONFIG.PORT}`;
    this.server = this.app.listen(CONFIG.PORT, () => {
      console.log(chalk.green(`APP name:         ${packageInfo.name}`));
      console.log(chalk.green(`APP version:      ${packageInfo.version}`));
      console.log(chalk.green(`Environment:      ${process.env.NODE_ENV || 'development'}`));
      console.log(chalk.green(`Server:           ${serverUrl}`));
      console.log(chalk.green(`Server started successfully!`));
      // listen terminal signal and handle it .e.g. kill

      process.on('SIGTERM', ()=>{
        this.gracefulShutdown();
      });
      // listen INT signal  and handle it. e.g. Ctrl-C
      process.on('SIGINT', ()=>{
        this.gracefulShutdown();
      });
      graceful({
        servers: [this.app],
        error: function (err, throwErrorCount) {
          console.error('Graceful catch onuncaughtException: %d times, log error here, and system will be shutdown by Graceful, error is: %s ', throwErrorCount, err.stack);
        },
        killTimeout: '30s',
      });
    });
  }

  gracefulShutdown(){
    console.log(`Received shutdown signal, shutting down gracefully.`);
    this.server.close();
    process.exit();
    // if after
    setTimeout(function () {
      console.error(`Could not close connections in time, forcefully shutting down`);
      process.exit();
    }, 10 * 1000);
  }

  initExpress () {
    this.initViewEngine();
    this.initLogger();
    this.initModulesServerRoutes();
    this.initAPIProxy();
    this.initStaticResource();
  }

  initLogger(){
    this.app.use(morgan('combined'));

    const accessLogStream =  rfs.createStream(`access.log`, {
      interval: '1d',
      size: "10M",
      path: CONFIG.LOG_DIR,
      compress: "gzip"
    });
    this.app.use(morgan('combined', { stream: accessLogStream }));
  }

  initStaticResource () {
    this.app.use('/', express.static(CONFIG.build.assetsPublicPath));
  }

  initViewEngine () {
    this.app.engine('html', require('ejs').__express);
    this.app.set('view engine', 'html');
    this.app.set('views', CONFIG.build.assetsPublicPath);
  }

  initModulesServerRoutes () {
    require(path.resolve('server/routes/app.server.routes.js'))(this.app);
  }

  initAPIProxy () {
    const proxyTable = CONFIG.proxyTable;
    for (const apiContext in proxyTable) {
      let options = proxyTable[apiContext];
      if (typeof options === 'string') {
        options = {target: options};
      }
      this.app.use(proxyMiddleware(options.filter || apiContext, options));
    }
  }

}

new App().start();