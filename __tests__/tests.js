import fs from 'fs';
import convert from '../src';


test('rss to rss', async () => {
  const fileContent = fs.readFileSync('./__tests__/fixtures/convertedFeed.rss', 'utf-8');
  const convertedFeed = await convert('./__tests__/fixtures/feed.rss', 'rss');
  expect(convertedFeed).toBe(fileContent);
});
