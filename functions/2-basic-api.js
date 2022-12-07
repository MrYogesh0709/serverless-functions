const items = require("../assets/data");

exports.handler = async (event, context, cb) => {
  return {
    Headers: {
      "Access-Control-Allow-Origin": "*",
    },
    statusCode: 200,
    body: JSON.stringify(items),
  };
};
