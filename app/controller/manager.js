/*
 * :file description:
 * :name: /m-xiaozhicloud/app/controller/manager.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-06 22:23:29
 * :last editor: 张德志
 * :date last edited: 2022-11-06 23:26:31
 */
'use strict';

const { Controller } = require('egg');

class AdminController extends Controller {
  // 获取管理员列表
  async list() {
    const list = await this.ctx.model.Manager.find();
    this.ctx.body = {
      status: 200,
      msg: '获取管理员成功',
      data: list,
      success: true,
    };
  }
  // 管理员登录
  async login() {
    const body = this.ctx.request.body;
    const { email, password } = body;
    const result = await this.ctx.model.Manager.find({ email, password });
    if (result.length <= 0) {
      this.ctx.body = {
        status: 404,
        msg: '用户名或密码不正确',
        success: false,
      };
      return;
    }
    this.ctx.body = {
      status: 200,
      msg: '查询用户成功',
      data: result,
      success: true,
    };
  }
}

module.exports = AdminController;

