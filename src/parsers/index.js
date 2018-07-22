import RssParser from './RssParser';
import AtomParser from './AtomParser';


const parsers = {
  rss: RssParser,
  atom: AtomParser,
};

export default inputFormat => parsers[inputFormat];
