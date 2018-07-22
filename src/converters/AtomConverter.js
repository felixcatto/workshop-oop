import parser from 'xml2json';


export default class AtomConverter {
  constructor(ast) {
    this.ast = ast;
  }

  convert() {
    return parser.toXml(this.ast);
  }
}
