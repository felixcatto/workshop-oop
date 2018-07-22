import RssConverter from './RssConverter';
import AtomConverter from './AtomConverter';


const converters = {
  rss: RssConverter,
  atom: AtomConverter,
};

export default outputFormat => converters[outputFormat];
