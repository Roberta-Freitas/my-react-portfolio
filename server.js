const express = require('express');
const next = require('next');
const sslify = require('express-sslify');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Redirect to HTTPS in production
  if (!dev) {
    server.use(sslify.HTTPS({ trustProtoHeader: true }));
  }

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(process.env.PORT || 3000, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${process.env.PORT || 3000}`);
  });
});
