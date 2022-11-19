/*
 * :file description:
 * :name: /m-xiaozhicloud/app/controller/banner.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-19 09:00:04
 * :last editor: 张德志
 * :date last edited: 2022-11-19 09:00:05
 */
'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async list() {
    
  }
}

module.exports = HomeController;

