import { server } from 'src/mocks/server';

import { getSections } from './getSections';
import { getSectionsExpectedResult, noSectionsHandler, unknownSectionHandler } from './getSections.mocks';

describe('getSections', () => {
  test('getSections', async () => {
    const sections = await getSections('/');

    expect(sections).toEqual(getSectionsExpectedResult);
  });

  test('no sections', async () => {
    server.use(noSectionsHandler);

    const sections = await getSections('/');

    expect(sections).toEqual([]);
  });

  test('the section is not defined', async () => {
    server.use(unknownSectionHandler);

    await expect(getSections('/')).rejects.toThrow('The section UnknownSection is not defined');
  });
});
