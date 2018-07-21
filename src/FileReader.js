import fs from 'fs';


export default class FileReader {
  read(path) {
    return fs.readFileSync(path, 'utf-8');
  }
}
