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

  server.use((req, res, next) => {
    console.log('Requested URL:', req.url);
    next();
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000; // Use Heroku's assigned port or 3000 for local development

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
