'use strict';

const Arena = require('bull-arena');
const Queue = require('bull');
const Redis = require('ioredis');

module.exports = app => {
  app.addSingleton('queue', createClient);
};

function createClient(config, app) {
  // Queue
  const queue = new Queue(`${config.queueName}:queue`, {
    createClient: () => {
      return new Redis(config);
    },
  });

  queue.on('error', err => {
    app.coreLogger.error('[egg-queue]', err);
  });

  // Queue monitoring
  if (config.monitorQueue) {
    Arena({
      queues: [{
        name: config.queueName,
        hostId: config.queueName,
        redis: config,
      }],
    });
  }

  return queue;
}
