/*
 * :file description:
 * :name: /m-xiaozhicloud/config/config.default.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-06 22:19:58
 * :last editor: 张德志
 * :date last edited: 2022-11-18 12:10:41
 */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1667744376789_6134';

  // add your middleware config here
  config.middleware = [];

  // 配置线上地址
  // config.cluster = {
  //   listen: {
  //     path: '',
  //     port: 8084,
  //     hostname: '0.0.0.0',
  //   },
  // };
  // 配置数据库连接
  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/xiaozhicloud',
      options: {},
    },
  };
  // 禁止csrf
  config.security = {
    csrf: {
      enable: false,
    },
  };


  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };


  return {
    ...config,
    ...userConfig,
  };
};
