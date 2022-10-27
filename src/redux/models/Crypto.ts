import { showMessage } from 'react-native-flash-message';
import cryptoApi from '../../services/apis/cryptoApi';
import { reducerActions as reducers } from './reducer';

const IsState = {
  cryptoTokens: [],
};

export const Crypto = {
  name: 'Crypto',
  state: IsState,
  reducers,
  effects: (dispatch: any) => ({
    async fetchTokens() {
      dispatch.Crypto.setError(false);
      try {
        const api = await cryptoApi.fetchCrypto();
        if (api) {
          const res = Object.entries(api?.data?.rates).map(([name, obj]) => ({
            name,
            ...obj,
          }));
          dispatch.Crypto.setState({
            cryptoTokens: res,
          });
        }
      } catch (error) {
        this.handleError(error);
      }
    },
    async handleError(error: any) {
      dispatch.Crypto.setError(true);
      if (error || error?.data?.errors || error?.data?.status === 'error') {
        var message =
          error?.message ||
          error?.data?.message ||
          'An error occured. Please try again.';

        return showMessage({
          message,
          type: 'danger',
          duration: 2500,
        });
      }
    },
  }),
};
