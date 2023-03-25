const Service = require("egg").Service;

class WebsiteService extends Service {
  async create(payload) {
    const { ctx, service } = this;
    const role = await service.role.show(payload.role);
    if (!role) {
      ctx.throw(404, "role is not found");
    }
    payload.password = await this.ctx.genHash(payload.password);
    return ctx.model.User.create(payload);
  }


  async destroy(_id) {
    const { ctx } = this;
    const website = await ctx.model.Office.findById(_id);

    if (!website) {
      ctx.throw(400, "删除的数据不存在");
    }
    return ctx.model.Office.findByIdAndRemove(_id);
  }

  async update(_id, payload) {
    const { ctx } = this;
    const office = await ctx.model.Office.findById(_id);
    if (!office) {
      ctx.throw(400, "更新的数据不存在");
    }
    return ctx.model.Office.findByIdAndUpdate(_id, payload);
  }

  // 获取列表数据
  async list(payload) {
    const { pageIndex, pageSize, filter } = payload;
    const regex = new RegExp(filter.title);
    const skip = this.ctx.helper.skip(pageIndex, pageSize);
    const totel = await this.ctx.model.Office.find({
      ...filter,
      title: { $regex: regex },
    }).count().exec()
    const result = await this.ctx.model.Office.find({
      ...filter,
      title: { $regex: regex },
    })
      .skip(skip)
      .limit(Number(pageSize)).sort({ add_time: -1 })
      .exec();

    return { total: totel, data: result };
  }

}

module.exports = WebsiteService;
