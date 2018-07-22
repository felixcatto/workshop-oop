import URL from 'url';
import path from 'path';
import NetworkReader from './readers/NetworkReader';
import FileReader from './readers/FileReader';
import RssParser from './parsers/RssParser';
import AtomParser from './parsers/AtomParser';
import RssConverter from './converters/RssConverter';
import AtomConverter from './converters/AtomConverter';


const isUrl = url => Boolean(URL.parse(url).host);

const readersMap = [
  {
    check: pathToFile => isUrl(pathToFile),
    reader: NetworkReader,
  },
  {
    check: pathToFile => !isUrl(pathToFile),
    reader: FileReader,
  },
];

const getReader = pathToFile => readersMap
  .find(el => el.check(pathToFile))
  .reader;

const parsers = {
  rss: RssParser,
  atom: AtomParser,
};

const converters = {
  rss: RssConverter,
  atom: AtomConverter,
};


export default async (pathToFile, outputFormat) => {
  const inputFormat = path.extname(pathToFile).slice(1);
  const reader = new (getReader(pathToFile))();
  const parser = new (parsers[inputFormat])();

  const xml = await reader.read(pathToFile);
  const ast = parser.parse(xml);
  const converter =  new (converters[outputFormat])(ast);

  return converter.convert();
};
