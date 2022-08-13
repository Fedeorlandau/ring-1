import { blogPost } from './blogPost';

test('Wrong folder path', () => {
  expect(() => {
    blogPost.find('content');
  }).toThrow('Unexpected file');
});
