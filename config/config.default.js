'use strict';

/**
 * egg-queue default config
 * @member Config#queue
 * @property {String} SOME_KEY - some description
 */
exports.queue = {
  app: true,
  agent: false,

  // Single Database
  // client: {
  //   host: 'host',
  //   port: 'port',
  //   db: 'db',
  //   password: 'password',
  //   queueName: 'queueName',
  //   monitor: true,
  // },

  // Multi Databases
  // clients: {
  //   q1: {
  //     host: 'host',
  //     port: 'port',
  //     db: 'db',
  //     password: 'password',
  //     queueName: 'queueName',
  //     monitor: true,
  //   },
  //   q2: {
  //     host: 'host',
  //     port: 'port',
  //     db: 'db',
  //     password: 'password',
  //     queueName: 'queueName',
  //     monitor: true,
  //   },
  // },

  // sentinel redis is also supported
};

