import FileReader from './FileReader';
import parser from 'xml2json';


export default class FeedConverter {
  constructor(path) {
    const reader = new FileReader();
    const xml = reader.read(path);
    this.ast = parser.toJson(xml, { object: true });
  }

  toRss() {
    console.log('toRss');
    return JSON.stringify(this.ast, null, 2);
  }

  toAtom() {
    console.log('toAtom');
    return JSON.stringify(this.ast, null, 2);
  }
}
