import path from 'path';
import getReader from './readers';
import getParser from './parsers';
import getConverter from './converters';


export default async (pathToFile, outputFormat) => {
  const inputFormat = path.extname(pathToFile).slice(1);
  const reader = new (getReader(pathToFile))();
  const parser = new (getParser(inputFormat))();

  const xml = await reader.read(pathToFile);
  const ast = parser.parse(xml);
  const converter =  new (getConverter(outputFormat))(ast);

  return converter.convert();
};
