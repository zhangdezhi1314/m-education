/*
 * :file description:
 * :name: /m-xiaozhicloud/app/router.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-06 22:19:58
 * :last editor: 张德志
 * :date last edited: 2022-11-23 11:25:58
 */
"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  // 公共url
  const APIV1 = "/api/v1";

  // 用户登录
  router.post(`${APIV1}/manager/login`, controller.manager.login);

  router.post(`${APIV1}/login/account`, controller.manager.account);

  router.get(`${APIV1}/currentUser`, controller.manager.currentUser);

  // 用户列表
  router.post(`${APIV1}/manager/list`, controller.manager.list);
  router.post(`${APIV1}/manager/add`, controller.manager.add);
  router.delete(`${APIV1}/manager/delete`, controller.manager.delete);

  // 轮播图管理
  router.post(`${APIV1}/banner/list`, controller.banner.list);

  // 网站管理
  router.post(`${APIV1}/website/list`, controller.website.list);
  router.post(`${APIV1}/website/add`, controller.website.add);
  router.put(`${APIV1}/website/edit`,controller.website.edit);
  router.delete(`${APIV1}/website/delete`,controller.website.delete);
  
  // 办公软件
  router.get(`${APIV1}/office-software/list`, controller.office.list);

  // 设计资源

  // 软件工具

  // 标签管理
};
