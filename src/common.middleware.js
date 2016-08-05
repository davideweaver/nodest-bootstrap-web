const Nodest = require("nodest");

const KoaBodyParser = require("koa-body-parser");
const KoaStaticFolder = require("koa-static-folder");

class CommonMiddleware extends Nodest.Middleware {
  use() {
    return [ KoaBodyParser(), KoaStaticFolder("./static") ];
  }
}

module.exports = CommonMiddleware;