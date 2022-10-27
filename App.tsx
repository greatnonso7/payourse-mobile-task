/* eslint-disable react/react-in-jsx-scope */
import { getPersistor } from '@rematch/persist';
import FlashMessage from 'react-native-flash-message';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import store from './src/redux/store';
import { hp } from './src/shared/responsive-dimension';
import { StyleSheet } from 'react-native';
import Navigation from './src/navigation';

const App = () => {
  console.warn = () => null;
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={getPersistor()}> */}
      <FlashMessage
        position="top"
        style={styles.flashContainer}
        duration={4500}
        titleStyle={styles.titleStyle}
      />
      <Navigation />
      {/* </PersistGate> */}
    </Provider>
  );
};

const styles = StyleSheet.create({
  flashContainer: {
    paddingTop: hp(20),
    zIndex: 10000,
  },
  titleStyle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 14,
  },
});

export default App;
