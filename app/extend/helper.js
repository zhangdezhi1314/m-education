// 处理成功响应
exports.success = ({ ctx, res = null, msg = "请求成功" }) => {
  ctx.body = {
    stat: 1,
    result: res,
    msg,
  };
  ctx.status = 200;
};

exports.skip = (pageIndex,pageSize) => {
  const skip = (Number(pageIndex) - 1) * Number(pageSize || 10);
  return skip;
};
