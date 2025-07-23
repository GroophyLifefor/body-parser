import { PerfTestTemplate } from './templates/autocannon.mjs';

function createSimpleServer(lib) {
  console.log('lib', lib)
}

PerfTestTemplate.runTest(createSimpleServer);
