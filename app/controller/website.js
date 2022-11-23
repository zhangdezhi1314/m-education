/*
 * :file description:
 * :name: /m-xiaozhicloud/app/controller/website.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-23 11:09:53
 * :last editor: 张德志
 * :date last edited: 2022-11-23 11:26:39
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
    const result = await ctx.model.Website.find();
    ctx.body = {
      code: 200,
      msg: '获取网站成功',
      success: true,
      data: result,
    };
  }

}

module.exports = HomeController;
