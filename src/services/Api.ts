import axios from 'axios';
import Config from 'react-native-config';

const Axios = axios.create({
  baseURL: Config.BASEURL,
  timeout: 60000,
});

Axios.defaults.headers.post['Content-Type'] = 'application/json';
Axios.defaults.headers.post.Accept = 'application/json';

export default Axios;
