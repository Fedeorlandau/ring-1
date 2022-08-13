import { createClient } from 'contentful';

import { getClient } from './getClient';

jest.mock('contentful', () => {
  return {
    createClient: jest.fn(),
  };
});

describe('getSections', () => {
  test('preview', () => {
    getClient(true);

    // twice because "getClient" create the client with and without preview mode
    expect(createClient).toHaveBeenCalledTimes(2);
  });
});
