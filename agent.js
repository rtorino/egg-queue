'use strict';

const queue = require('./lib/queue');

module.exports = agent => {
  if (agent.config.queue.agent) queue(agent);
};
