import React, { useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
  RefreshControl,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { sharedImages } from '../../images';
import { RootState } from '../../redux/store';
import CryptoItem from '../../shared/crypto-item';
import colors from '../../styles/colors';
import CryptoInfo from './modals/CryptoInfo';
import { styles } from './style';
import FuzzySearch from 'fuzzy-search';

const Home = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [currentCrypto, setCurrentCrypto] = useState({});
  const [showInfo, setShowInfo] = useState<boolean>(false);

  const {
    Crypto: { fetchTokens },
  } = useDispatch();

  const cryptoTokens = useSelector(
    (state: RootState) => state.Crypto.cryptoTokens,
  );

  useEffect(() => {
    fetchTokens();
    setSearchData(cryptoTokens);
  }, [cryptoTokens, fetchTokens]);

  const [searchData, setSearchData] = useState(cryptoTokens || []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchTokens();
    setRefreshing(false);
  };

  const onPressCryptoItem = async (item: any) => {
    setCurrentCrypto(item);
    setShowInfo(true);
  };

  const onChange = async (val: string) => {
    if (val.length > 0) {
      const searcher = new FuzzySearch(cryptoTokens, ['name'], {
        caseSensitive: false,
      });

      const result = searcher.search(val);
      setSearchData(result as any);
    } else {
      setSearchData(cryptoTokens);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        testID="CryptoTokens"
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
          <TextInput
            testID="SearchToken"
            style={styles.searchInputText}
            placeholderTextColor={colors.GREY}
            placeholder="Search Listings"
            selectionColor={colors.WHITE}
            onChangeText={text => onChange(text)}
          />
        </View>

        <View style={styles.cryptoTokensContainer}>
          {searchData?.map((item, index) => {
            return (
              <View key={index}>
                <CryptoItem item={item} onComplete={onPressCryptoItem} />
              </View>
            );
          })}
        </View>
      </ScrollView>
      <CryptoInfo
        onClose={() => setShowInfo(false)}
        isVisible={showInfo}
        currentCrypto={currentCrypto}
      />
    </SafeAreaView>
  );
};

export default Home;
