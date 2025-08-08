import { PerfTestTemplate } from './templates/autocannon.mjs';
import express from 'express';

function createSimpleServer(test) {
  const bodyParser = test.lib.default;
  const app = express();
  app.use(bodyParser.json());

  app.post('/json', (req, res) => {
    const jsonData = req.body;
    res.send(`Received JSON data: ${JSON.stringify(jsonData)}`);
  });

  return {
    app,
    autocannonConfig: {
      url: `${test.url}/json`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ test: 'data', timestamp: Date.now() }),
    },
  };
}

PerfTestTemplate.runTest(createSimpleServer);