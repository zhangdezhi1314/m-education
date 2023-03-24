'use strict';

const { Controller } = require('egg');

class Office extends Controller {
  async list() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = Office;
