import { PerfTestTemplate } from './templates/autocannon.mjs';
import express from 'express';

function createSimpleServer(lib) {
  const bodyParser = lib.default;
  const app = express();
  app.use(bodyParser.json());

  app.post('/json', (req, res) => {
    const jsonData = req.body;
    res.send(`Received JSON data: ${JSON.stringify(jsonData)}`);
  });

  return app;
}

PerfTestTemplate.runTest(createSimpleServer);