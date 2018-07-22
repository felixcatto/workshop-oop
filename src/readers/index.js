import URL from 'url';
import NetworkReader from './NetworkReader';
import FileReader from './FileReader';


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

export default pathToFile => readersMap
  .find(el => el.check(pathToFile))
  .reader;
