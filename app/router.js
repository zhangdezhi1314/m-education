/*
 * :file description:
 * :name: /m-xiaozhicloud/app/router.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-06 22:19:58
 * :last editor: 张德志
 * :date last edited: 2022-11-23 11:25:58
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 公共url
  const baseURL = '/api/v1';

  // 用户登录
  router.post('/api/v1/manager/login', controller.manager.login);

  router.post(`${baseURL}/login/account`, controller.manager.account);

  router.get(`${baseURL}/currentUser`, controller.manager.currentUser);

  // 用户列表
  //------------------------------------------------------------------
  // 获取用户列表
  router.post(`${baseURL}/manager/list`, controller.manager.list);
  // 增加用户
  router.post(`${baseURL}/manager/add`, controller.manager.add);
  // 删除管理员
  router.delete(`${baseURL}/manager/delete`, controller.manager.delete);
  //------------------------------------------------------------------

  // 轮播图
  //-----------------------------------------------------------------
  router.post(`${baseURL}/banner/list`, controller.banner.list);


  // 网站建设
  //-----------------------------------------------------------------
  router.post(`${baseURL}/website/list`, controller.website.list);
  router.post(`${baseURL}/website/list`,controller.website.add);


};
