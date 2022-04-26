const app = require("./server");
const { port = 9090 } = process.env;

const server = app.listen(port, () => {
  console.log(`Running chat server at ${port}...`);
});

module.exports = server;
