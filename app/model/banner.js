/*
 * :file description:
 * :name: /m-xiaozhicloud/app/model/banner.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-19 09:01:10
 * :last editor: 张德志
 * :date last edited: 2022-11-20 09:10:20
 */
/*
 * :file description:
 * :name: /m-xiaozhicloud/app/model/manager.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-06 22:21:28
 * :last editor: 张德志
 * :date last edited: 2022-11-18 22:44:33
 */
'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const d = new Date();
  const BannerSchema = Schema({
    name: { type: String }, // 图片名称
    url: { type: String }, // 图片链接
    sort: { type: String }, // 排序
    position: { type: Number }, // 位置1top,2body,3bottom
    update_time: {
      type: Number,
    },
    add_time: {
      type: Number,
      default: d.getTime(),
    },
  });
  return mongoose.model('Banner', BannerSchema, 'banner');
};
