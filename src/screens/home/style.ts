import { StyleSheet } from 'react-native';
import { hp, wp } from '../../shared/responsive-dimension';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.APP_BLACK,
  },
  headerContainer: {
    marginTop: hp(10),
    marginHorizontal: wp(24),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  portfolioGraph: {
    width: wp(20),
    height: hp(20),
  },
  headerTitle: {
    color: colors.WHITE,
    fontSize: hp(16),
    fontWeight: '500',
  },
  portfolioIcon: {
    width: wp(25),
    height: hp(25),
  },
  amountContainer: {
    marginTop: hp(40),
    marginHorizontal: wp(24),
  },
  searchInputText: {
    width: wp(327),
    height: hp(55),
    borderWidth: 1,
    borderColor: colors.LIGHT_GREY,
    borderRadius: hp(16),
    paddingHorizontal: wp(15),
    fontSize: hp(16),
    fontWeight: '500',
    color: colors.WHITE,
  },
  cryptoAmountText: {
    color: colors.WHITE,
    fontWeight: '600',
    fontSize: hp(28),
  },
  cryptoAmountRate: {
    color: colors.GREEN,
    paddingTop: hp(3),
    fontSize: hp(16),
    fontWeight: '500',
  },
  cryptoTokensContainer: {
    marginTop: hp(20),
  },
});
