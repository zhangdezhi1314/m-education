/*
 * :file description:
 * :name: /m-xiaozhicloud/app/router.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-06 22:19:58
 * :last editor: 张德志
 * :date last edited: 2022-11-18 20:48:04
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 公共url
  const baseURL = '/api/v1';

  router.post(`${baseURL}/login/account`, controller.manager.account);

  router.get(`${baseURL}/currentUser`, controller.manager.currentUser);

  // 获取用户列表
  router.post(`${baseURL}/manager/list`, controller.manager.list);
  // 用户登录
  router.post('/api/v1/manager/login', controller.manager.login);
};
