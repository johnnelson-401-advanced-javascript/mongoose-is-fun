require('dotenv').config();
const app = require('./lib/app');

const { createServer } = require('http');
const server = createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});