import { PerfTestTemplate } from './templates/autocannon.mjs';
import express from 'express';

function createSimpleServer(lib) {
  const bodyParser = lib.default;
  const app = express();
  app.use(bodyParser.raw({ type: '*/*' }));

  app.post('/raw', (req, res) => {
    const rawData = req.body;
    res.send(`Received raw data: ${rawData.toString()}`);
  });

  return app;
}

PerfTestTemplate.runTest(createSimpleServer);