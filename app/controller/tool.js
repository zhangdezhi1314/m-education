"use strict";

const { Controller } = require("egg");

class ToolController extends Controller {
  // 添加数据
  async add() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    await this.service.tool.create(body);
    ctx.helper.success({ ctx, res: "新增办公文档成功" });
 
  }

  async edit() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    await this.service.tool.update(body._id, body);
    ctx.helper.success({ ctx, res: [], msg: "编辑办公文档成功" });
  }

  // 获取所有网站列表
  async list() {
    const { ctx, service } = this;
    // 组装参数
    const body = ctx.request.body;
    // 调用 Service 进行业务处理
    const res = await service.tool.list(body);
    // 设置响应内容和响应状态码
    ctx.helper.success({ ctx, res });
  }

  // 删除网站
  async delete() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    await this.service.tool.destroy(body._id);
    ctx.helper.success({ ctx, res: "删除办公文档成功" });
  }
}

module.exports = ToolController;
