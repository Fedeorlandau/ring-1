// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom';

// @ts-expect-error we don't need types for "jest-next-dynamic"
import preloadAll from 'jest-next-dynamic';
import { server } from 'src/mocks/server';

beforeAll(async () => {
  await preloadAll();

  // Establish API mocking before all tests.
  server.listen();
});

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());
