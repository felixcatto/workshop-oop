import URL from 'url';
import path from 'path';
import NetworkReader from './NetworkReader';
import FileReader from './FileReader';
import Converter from './Converter';
import ConverterAtomToRss from './ConverterAtomToRss';
import ConverterRssToAtom from './ConverterRssToAtom';


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

const convertersMap = [
  {
    check: (inputFormat, outputFormat) => inputFormat === outputFormat,
    converter: Converter,
  },
  {
    check: (inputFormat, outputFormat) => inputFormat === 'rss' && outputFormat === 'atom',
    converter: ConverterRssToAtom,
  },
  {
    check: (inputFormat, outputFormat) => inputFormat === 'atom' && outputFormat === 'rss',
    converter: ConverterAtomToRss,
  },
];

const getConverter = (inputFormat, outputFormat) => convertersMap
  .find(el => el.check(inputFormat, outputFormat))
  .converter;

export default async (pathToFile, outputFormat) => {
  const inputFormat = path.extname(pathToFile).slice(1);
  const reader = new (getReader(pathToFile))();
  const xml = await reader.read(pathToFile);
  const converter = new (getConverter(inputFormat, outputFormat))(xml);
  return converter.convert();
};
