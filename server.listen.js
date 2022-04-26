const app = require("./server");
const port = process.env.PORT || 8080;

const server = app.listen(port, () => {
  console.log(`Running chat server at ${port}...`);
});

module.exports = server;
