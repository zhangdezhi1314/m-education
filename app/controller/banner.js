/*
 * :file description:
 * :name: /m-xiaozhicloud/app/controller/banner.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-19 09:00:04
 * :last editor: 张德志
 * :date last edited: 2022-11-20 09:13:10
 */
'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async list() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    const total = await ctx.model.Banner.count();
    const result = await this.ctx.model.Banner.find(body);
    ctx.body = {
      msg: '获取轮播图成功',
      total,
      data: result,
      success: true,
      code: 200,
    };
  }
}

module.exports = HomeController;

