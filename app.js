'use strict';

const queue = require('./lib/queue');

module.exports = app => {
  if (app.config.queue.app) queue(app);
};
