import parser from 'xml2json';


export default class ConverterAtomToRss {
  constructor(xml) {
    this.ast = parser.toJson(xml, { object: true });
  }

  convert() {
    return JSON.stringify(this.ast, null, 2);
  }
}
