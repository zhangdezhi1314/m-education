/*
 * :file description:
 * :name: /m-xiaozhicloud/app/controller/website.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-23 11:09:53
 * :last editor: 张德志
 * :date last edited: 2022-11-23 12:31:41
 */
'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  // 添加数据
  async add() {
    const ctx = this.ctx;

  }

  // 获取所有网站列表
  async list() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    const result = await ctx.model.Website.find(body);
    ctx.body = {
      code: 200,
      msg: '获取网站成功',
      success: true,
      data: result,
    };
  }

  // 删除网站
  async delete() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    await ctx.model.Website.deleteOne(body);
    ctx.body = {
      code: 200,
      msg: '删除成功',
      success: true,
      data: null,
    };
  }

}

module.exports = HomeController;
