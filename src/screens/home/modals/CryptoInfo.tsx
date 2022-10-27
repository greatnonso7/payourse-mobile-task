import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import BaseModal from '../../../shared/base-modal';
import { hp, wp } from '../../../shared/responsive-dimension';
import colors from '../../../styles/colors';

interface CryptoInfoProps {
  isVisible: boolean;
  onClose: () => void;
  currentCrypto: any;
}

const CryptoInfo = ({ isVisible, onClose, currentCrypto }: CryptoInfoProps) => {
  return (
    <BaseModal visible={isVisible} onClose={onClose}>
      <View style={styles.modalContainer}>
        <Image
          source={currentCrypto?.icon}
          resizeMode="contain"
          style={styles.cryptoIcon}
        />

        <View style={styles.modalBodyContainer}>
          <View style={styles.modalCryptoItemContainer}>
            <Text style={styles.modalBodyHeaderText}>Coin</Text>
            <Text style={styles.modalCryptoListText}>
              {currentCrypto?.item?.name}
            </Text>
          </View>
          <View style={styles.modalCryptoItemContainer}>
            <Text style={styles.modalBodyHeaderText}>Currency</Text>
            <Text style={styles.modalCryptoListText}>
              {currentCrypto?.item?.name?.includes('NGN') ? 'NGN ' : 'USD'}
            </Text>
          </View>
          <View style={styles.modalCryptoItemContainer}>
            <Text style={styles.modalBodyHeaderText}>Current Rate</Text>
            <Text style={styles.modalCryptoListText}>
              {currentCrypto?.item?.name?.includes('NGN') ? '₦ ' : '$ '}
              {currentCrypto?.item?.rate?.toLocaleString()}
            </Text>
          </View>
        </View>
      </View>
    </BaseModal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    paddingVertical: hp(30),
    marginBottom: hp(30),
  },
  modalBodyContainer: {
    marginTop: hp(40),
    paddingHorizontal: wp(24),
  },
  modalCryptoItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp(10),
  },
  modalBodyHeaderText: {
    color: colors.WHITE,
    fontSize: hp(16),
    fontWeight: '500',
  },
  modalCryptoListText: {
    fontWeight: '500',
    color: colors.WHITE,
    fontSize: hp(18),
  },
  cryptoIcon: {
    width: wp(50),
    height: hp(50),
    alignSelf: 'center',
  },
});

export default CryptoInfo;
