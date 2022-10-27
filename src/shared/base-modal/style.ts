import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../styles/colors';

const screen = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 0,
  },
  generalContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 0,
  },
  dialogContainer: {
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    width: '100%',
    maxHeight: screen.height - 100,
    alignSelf: 'flex-end',
    position: 'relative',
    backgroundColor: colors.LIGHT_BLACK,
    zIndex: 10,
  },
});
