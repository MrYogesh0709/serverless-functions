require("dotenv").config();
const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base("appSEEVDRsGveNs0p")
  .table("products");

exports.handler = async (event, context, cb) => {
  //   console.log(event);
  const { id } = event.queryStringParameters;
  if (id) {
    try {
      //retreve is method name;
      const product = await airtable.retrieve(id);
      //   console.log(product);
      if (product.error) {
        return {
          statusCode: 404,
          body: `no product with id:${id}`,
        };
      }
      return {
        statusCode: 200,
        body: JSON.stringify(product),
      };
    } catch (error) {
      return {
        statusCode: 404,
        body: `server error`,
      };
    }
  }
  try {
    // const data = await airtable.list()
    // console.log(data)
    const { records } = await airtable.list();
    const products = records.map((product) => {
      const { id } = product;
      const { Name, Image, price } = product.fields;
      const url = Image[0].url;

      return { id, Name, price, url };
    });
    return {
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: "Server Error",
    };
  }
};
