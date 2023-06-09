/*
 * :file description:
 * :name: /m-xiaozhicloud/app/controller/banner.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-19 09:00:04
 * :last editor: 张德志
 * :date last edited: 2022-11-20 09:13:10
 */
"use strict";

const { Controller } = require("egg");

class AdvertController extends Controller {
  // 添加数据
  async add() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    await this.service.advert.create(body);
    ctx.helper.success({ ctx, res:'新增网站成功' });
  }

  async edit() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    await this.service.advert.update(body._id, body);
    ctx.helper.success({ ctx, res: [], msg: "编辑网站成功" });
  }

  // 获取所有网站列表
  async list() {
    const { ctx, service } = this;
    // 组装参数
    const body = ctx.request.body;
    // 调用 Service 进行业务处理
    const res = await service.advert.list(body);
    // 设置响应内容和响应状态码
    ctx.helper.success({ ctx, res });
  }

  // 删除网站
  async delete() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    await this.service.advert.destroy(body._id);
    ctx.helper.success({ ctx, res: "删除网站成功" });
  }
}

module.exports = AdvertController;
