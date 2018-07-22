import URL from 'url';
import NetworkReader from './NetworkReader';
import FileReader from './FileReader';
import FeedConverterRss from './FeedConverterRss';
import FeedConverterAtom from './FeedConverterAtom';


const isUrl = url => Boolean(URL.parse(url).host);

const pathToReaderMap = [
  {
    check: path => isUrl(path),
    reader: NetworkReader,
  },
  {
    check: path => !isUrl(path),
    reader: FileReader,
  },
];

const pathToReader = path => pathToReaderMap.find(el => el.check(path)).reader;

const converters = {
  rss: FeedConverterRss,
  atom: FeedConverterAtom,
};

export default async (path, format) => {
  const reader = new (pathToReader(path))();
  const xml = await reader.read(path);
  const converter = new (converters[format])(xml);
  return converter.convert();
};
