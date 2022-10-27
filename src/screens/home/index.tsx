import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { sharedImages } from '../../images';
import { RootState } from '../../redux/store';
import CryptoItem from '../../shared/crypto-item';
import colors from '../../styles/colors';
import { styles } from './style';

const Home = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const {
    Crypto: { fetchTokens },
  } = useDispatch();

  useEffect(() => {
    fetchTokens();
  }, [fetchTokens]);

  const cryptoTokens = useSelector(
    (state: RootState) => state.Crypto.cryptoTokens,
  );

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchTokens();
    setRefreshing(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            tintColor={colors.WHITE}
            onRefresh={onRefresh}
          />
        }
        indicatorStyle="white">
        <View style={styles.headerContainer}>
          <Image
            source={sharedImages.portfolio_graph}
            resizeMode="contain"
            style={styles.portfolioGraph}
          />
          <Text style={styles.headerTitle}>Default Portfolio</Text>
          <Image
            source={sharedImages.more_portfolio}
            resizeMode="contain"
            style={styles.portfolioIcon}
          />
        </View>

        <View style={styles.amountContainer}>
          <Text style={styles.cryptoAmountText}>$16,038.93</Text>
          <Text style={styles.cryptoAmountRate}>+ $304.00</Text>
        </View>

        <View style={styles.cryptoTokensContainer}>
          {Object.entries(cryptoTokens).map((item, index) => {
            return (
              <View key={index}>
                <CryptoItem item={item} title={''} />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
