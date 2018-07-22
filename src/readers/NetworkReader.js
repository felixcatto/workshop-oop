import axios from 'axios';


export default class NetworkReader {
  async read(url) {
    const response = await axios.get(url);
    return response.data;
  }
}
