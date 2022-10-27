import Axios from '../Api';
import Config from 'react-native-config';

export default {
  fetchCrypto: () => Axios.get(`${Config.BASEURL}`).then(({ data }) => data),
};
