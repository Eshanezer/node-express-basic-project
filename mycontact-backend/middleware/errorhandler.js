const { constansts } = require("../constants");
const erorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  switch (statusCode) {
    case constansts.VALIDATION_ERROR:
      res.json({
        title: "Validation Faild",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constansts.NOT_FOUND:
      res.json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constansts.UNAUTHORIZED:
      res.json({
        title: "Unauthorized",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constansts.SERVER_ERROR:
      res.json({
        title: "Server Error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constansts.FORBIDDEN:
      res.json({
        title: "Forbidden",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    default:
      break;
  }
};

module.exports = erorHandler;
