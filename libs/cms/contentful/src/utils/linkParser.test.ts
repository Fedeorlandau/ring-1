import { linkParser } from './linkParser';

describe('linkParaser', () => {
  test('fields are "undefined"', () => {
    // @ts-expect-error force error
    const pageData = linkParser({});

    expect(pageData).toBe('');
  });
});
