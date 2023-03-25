const Service = require("egg").Service;

class WebsiteService extends Service {
  // create======================================================================================================>
  async create(payload) {
    const { ctx, service } = this;
    const role = await service.role.show(payload.role);
    if (!role) {
      ctx.throw(404, "role is not found");
    }
    payload.password = await this.ctx.genHash(payload.password);
    return ctx.model.User.create(payload);
  }

  // destroy======================================================================================================>
  async destroy(_id) {
    const { ctx, service } = this;
    const user = await ctx.service.user.find(_id);
    if (!user) {
      ctx.throw(404, "user not found");
    }
    return ctx.model.User.findByIdAndRemove(_id);
  }

  // update======================================================================================================>
  async update(_id, payload) {
    const { ctx, service } = this;
    const user = await ctx.service.user.find(_id);
    if (!user) {
      ctx.throw(404, "user not found");
    }
    return ctx.model.User.findByIdAndUpdate(_id, payload);
  }

  // show======================================================================================================>
  async show(_id) {
    const user = await this.ctx.service.user.find(_id);
    if (!user) {
      this.ctx.throw(404, "user not found");
    }
    return this.ctx.model.User.findById(_id).populate("role");
  }

  // index======================================================================================================>
  async list(payload) {
    const { pageIndex, pageSize, filter } = payload;
    const regex = new RegExp(filter.title);
    const skip = this.ctx.helper.skip(pageIndex, pageSize);
    const count = await this.ctx.model.Website.find().count();
    const result = await this.ctx.model.Website.find({
      ...filter,
      title: { $regex: regex },
    })
      .skip(skip)
      .limit(Number(pageSize))
      .exec();

    return { total: count, data: result };
  }

  async removes(payload) {
    return this.ctx.model.User.remove({ _id: { $in: payload } });
  }

  // Commons======================================================================================================>
  async findByMobile(mobile) {
    return this.ctx.model.User.findOne({ mobile: mobile });
  }

  async find(id) {
    return this.ctx.model.User.findById(id);
  }

  async findByIdAndUpdate(id, values) {
    return this.ctx.model.User.findByIdAndUpdate(id, values);
  }
}

module.exports = WebsiteService;
