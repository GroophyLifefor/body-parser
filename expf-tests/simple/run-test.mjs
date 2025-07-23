import { PerfTestTemplate } from './templates/autocannon.mjs';
import express from 'express';

function createSimpleServer(lib) {
  const bodyParser = lib.default;
  const app = express();
  app.use(bodyParser.json());

  return app;
}

PerfTestTemplate.runTest(createSimpleServer);