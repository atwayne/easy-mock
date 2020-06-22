const { match } = require("path-to-regexp");

const requireClean = function (path) {
  delete require.cache[require.resolve(path)];
  return require(path);
};

const baseDir = "../";

module.exports = async (ctx, next) => {
  // delete require cache
  const configurationPath = baseDir + "./config/default.json";
  const mocks = requireClean(configurationPath).mocks;

  // find match router
  const matchingRouter = mocks.find((element) => {
    const isMatch = match(element.path);
    return (
      element.method &&
      ctx.method == element.method.toUpperCase() &&
      isMatch(ctx.path)
    );
  });

  if (!matchingRouter) {
    await next();
  } else {
    const responseJsonFilePath = matchingRouter.data;
    ctx.body = requireClean(baseDir + responseJsonFilePath);
  }
};
