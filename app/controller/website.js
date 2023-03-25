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

const {
  Controller
} = require('egg');

class WebsiteController extends Controller {

  // 添加数据
  async add() {
    const ctx = this.ctx;
    const manager = new ctx.model.Website(ctx.request.body);
    await manager.save();
    ctx.body = {
      stat: 1,
      msg: '添加用户成功',
      success: true,
      data: [],
    };

  }

  async edit() {
    const ctx = this.ctx;
    ctx.body = {
      stat:1,
      msg: '更新网站成功',
      success: true,
      data: null,
    }
  }

  // 获取所有网站列表
  async list() {

    const { ctx, service } = this
    // 组装参数
    const body = ctx.request.body;
    // 调用 Service 进行业务处理
    const res = await service.website.list(body)
    // 设置响应内容和响应状态码
    ctx.helper.success({ctx, res})
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

module.exports = WebsiteController;