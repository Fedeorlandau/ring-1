// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom';

// @ts-expect-error do we need types for "jest-next-dynamic"?
// eslint-disable-next-line import/no-extraneous-dependencies
import preloadAll from 'jest-next-dynamic';

beforeAll(async () => {
  await preloadAll();

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  jest.spyOn(console, 'error').mockImplementation(() => {});
});
