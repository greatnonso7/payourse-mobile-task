import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { cryptoIcons } from '../../constants';
import colors from '../../styles/colors';
import { hp, wp } from '../responsive-dimension';

interface CryptoItemProps {
  item: any;
  onComplete: (item: any) => void;
}

const CryptoItem = ({ item, onComplete }: CryptoItemProps) => {
  const found = cryptoIcons.find(
    e => e.name === item.name?.slice(0, 3).toLowerCase(),
  )?.icon;

  const data = { icon: found, item };

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => onComplete(data)}
      style={styles.cryptoItemContainer}>
      <Image source={found} resizeMode="contain" style={styles.cryptoIcon} />
      <View style={styles.cryptoItemBodyContainer}>
        <Text style={styles.cryptoText}>{item.name}</Text>
        <Text style={styles.amountText}>
          {item?.name?.includes('NGN') ? '₦ ' : '$ '}
          {item?.rate?.toLocaleString()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cryptoItemContainer: {
    width: wp(327),
    height: hp(80),
    borderWidth: 1.4,
    borderColor: colors.LIGHT_BLACK,
    marginBottom: hp(20),
    alignSelf: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(16),
    paddingVertical: hp(16),
    flexDirection: 'row',
    borderRadius: hp(20),
  },
  cryptoIcon: {
    width: wp(30),
    height: hp(30),
  },
  amountText: {
    color: colors.WHITE,
    fontSize: hp(15),
    paddingTop: hp(4),
    fontWeight: '500',
  },
  cryptoItemBodyContainer: {
    marginLeft: wp(15),
  },
  cryptoText: {
    fontSize: hp(16),
    fontWeight: '600',
    color: colors.WHITE,
  },
});

export default CryptoItem;
