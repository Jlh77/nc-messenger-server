const app = require("./server");
const { PORT = 9090 } = process.env;

const server = app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Running chat server at ${PORT}...`);
});

module.exports = server;
