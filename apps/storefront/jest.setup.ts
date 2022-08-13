// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom';

import { server } from 'src/mocks/server';

process.env.CONTENTFUL_SPACE_ID = 'CONTENTFUL_SPACE_ID';
process.env.CONTENTFUL_ACCESS_TOKEN = 'CONTENTFUL_ACCESS_TOKEN';
process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN = 'CONTENTFUL_PREVIEW_ACCESS_TOKEN';

process.env.SWELL_STORE_ID = 'SWELL_STORE_ID';
process.env.SWELL_SECRET_KEY = 'SWELL_SECRET_KEY';

// Establish API mocking before all tests.
beforeAll(() => {
  server.listen();
});

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());
