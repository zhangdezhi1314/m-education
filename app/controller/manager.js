/*
 * :file description:
 * :name: /m-xiaozhicloud/app/controller/manager.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-06 22:23:29
 * :last editor: 张德志
 * :date last edited: 2022-11-18 23:47:06
 */
'use strict';

const { Controller } = require('egg');

class AdminController extends Controller {
  // 获取管理员列表
  async list() {
    const total = await this.ctx.model.Manager.count();
    const list = await this.ctx.model.Manager.find();
    this.ctx.body = {
      code: 200,
      msg: '获取管理员成功',
      data: list,
      total,
      success: true,
    };
  }

  // 增加用户
  async add() {
    const ctx = this.ctx;
    const body = ctx.request.body;

    // 选判断手机号是否存在
    const result = await ctx.model.Manager.find({ mobile: body.mobile });

    if (result.length > 0) {
      ctx.status = 400;
      ctx.body = {
        code: 400,
        msg: `手机号${body.mobile}已存在`,
        success: false,
      };
      return;
    }
    const manager = new ctx.model.Manager(body);
    await manager.save();
    ctx.body = {
      code: 200,
      msg: '添加用户成功',
      success: true,
      data: result,
    };
  }

  // 删除用户
  async delete() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    const result = await ctx.model.Manager.deleteOne({ _id: body.id });

    if (result.length <= 0) {
      ctx.status = 400;
      ctx.body = {
        code: 400,
        msg: '删除用户失败',
        success: false,
      };
      return;
    }
    ctx.body = {
      code: 200,
      msg: '删除成功',
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
  async account() {
    const ctx = this.ctx;
    ctx.body = {
      status: 200,
      currentAuthority: 'admin',
    };
  }
  // 管理员登录
  async currentUser() {
    const ctx = this.ctx;
    ctx.body = {
      status: 200,
      success: true,
      data: {
        name: 'Serati Ma',
        avatar:
          'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        userid: '00000001',
        email: 'antdesign@alipay.com',
        signature: '海纳百川，有容乃大',
        title: '交互专家',
        group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
        tags: [
          {
            key: '0',
            label: '很有想法的',
          },
          {
            key: '1',
            label: '专注设计',
          },
          {
            key: '2',
            label: '辣~',
          },
          {
            key: '3',
            label: '大长腿',
          },
          {
            key: '4',
            label: '川妹子',
          },
          {
            key: '5',
            label: '海纳百川',
          },
        ],
        notifyCount: 12,
        unreadCount: 11,
        country: 'China',

        geographic: {
          province: {
            label: '浙江省',
            key: '330000',
          },
          city: {
            label: '杭州市',
            key: '330100',
          },
        },
        address: '西湖区工专路 77 号',
        phone: '0752-268888888',
      },
    };
  }
}

module.exports = AdminController;
