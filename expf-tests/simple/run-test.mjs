import { PerfTestTemplate } from './templates/autocannon.mjs';
import express from 'express';

function createSimpleServer(lib) {
  const bodyParser = lib.default;
  const app = express();
  app.use(bodyParser.json());

  app.post('/raw', (req, res) => {
    const rawData = req.body;
    res.send(`Received raw data: ${JSON.stringify(rawData)}`);
  });

  return app;
}

PerfTestTemplate.runTest(createSimpleServer);