import parser from 'xml2json';


export default class RssParser {
  parse(xml) {
    return parser.toJson(xml, { object: true });
  }
}
