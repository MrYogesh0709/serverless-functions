// domain/.netlify/functions/1-hello

const person = { name: "yogesh" };

//1st way with async is much cleaner
exports.handler = async (event, context, cb) => {
  //   console.log(event);
  //   console.log(context);
  return {
    statusCode: 200,
    //here in body must pass string so if object comes let it convert in to string by JSON.stringify
    body: "our first netlify function example",
    // body: JSON.stringify(person),
  };
};

//2nd way with callback
// exports.handler = (event, context, cb) => {
//   cb(null, {
//     statusCode: 200,
//     body: "Hello world",
//   });
// };
