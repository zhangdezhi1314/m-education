/*
 * :file description: 
 * :name: /m-xiaozhicloud/app/model/website.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-11-23 11:12:24
 * :last editor: 张德志
 * :date last edited: 2022-11-23 11:16:53
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
  const WebsiteSchema = Schema({
    title: { type: String },
    url: { type: String },
    link: { type: String },
    description: { type: String },
    view: { type: Number, default: 1 },
    review: { type: Number, default: 1 },
    status: { type: Number, default: 1 },
    add_time: {
      type: Number,
      default: d.getTime(),
    },
  });
  return mongoose.model('Website', WebsiteSchema, 'Website');
};
