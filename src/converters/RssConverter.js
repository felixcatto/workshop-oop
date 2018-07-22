import parser from 'xml2json';


export default class RssConverter {
  constructor(ast) {
    this.ast = ast;
  }

  convert() {
    return parser.toXml(this.ast);
  }
}
