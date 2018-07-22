import parser from 'xml2json';


export default class AtomParser {
  parse(xml) {
    return parser.toJson(xml, { object: true });
  }
}
