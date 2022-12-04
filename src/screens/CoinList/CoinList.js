import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useCoinContext} from '../../context/CoinContext';
import styles from './CoinList.styles';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {colors, strings} from '../../constant';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CoinList = () => {
  const {state, dispatch, getCoins} = useCoinContext();
  const [refreshing, setRefreshing] = useState(false);
  const [slice, setSlice] = useState(5);
  const [load, setLoad] = useState(false);
  const {navigate} = useNavigation();

  const renderItem = ({item}) => (
    <View style={styles.renderItemWrapper}>
      <TouchableOpacity onPress={() => navigate('CoinDetail', {item})}>
        <View style={styles.titleWrapper}>
          <Text style={styles.renderItemHeader}>{item.Code}</Text>
          <TouchableOpacity
            style={styles.iconWrapper}
            onPress={() =>
              dispatch({
                type: 'DELETE_COIN',
                payload: item.Id,
              })
            }>
            <Ionicons name={'trash'} size={22} color={colors.primary} />
          </TouchableOpacity>
        </View>
        <View style={styles.renderItemTextWrapper}>
          <View>
            <Text style={styles.renderItemText}>{strings.depositMaxLimit}</Text>
            <Text style={styles.renderItemText}>{strings.depositMinLimit}</Text>
            <Text style={styles.renderItemText}>
              {strings.withdrawMaxLimit}
            </Text>
            <Text style={styles.renderItemText}>
              {strings.withdrawMinLimit}
            </Text>
          </View>
          <View style={styles.renderItemValueWrapper}>
            <Text style={styles.renderItemValue}>{item.DepositMaxLimit}</Text>
            <Text style={styles.renderItemValue}>{item.DepositMinLimit}</Text>
            <Text style={styles.renderItemValue}>{item.WithdrawMaxLimit}</Text>
            <Text style={styles.renderItemValue}>{item.WithdrawMinLimit}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  const fetchMore = () => {
    // Verileri apiden pagination gibi sayfa sayfa çekmediğimiz için böyle bir yapı oluşturdum.
    // Flatlist sanki sayfalara ayrılmış api'dan veri çeker gibi davranıyor.
    setLoad(true);
    if (slice === state.coins.length) {
      return;
    }
    setTimeout(() => {
      if (slice < state.coins.length - 5) {
        setSlice(prevState => prevState + 5);
      } else {
        setSlice(state.coins.length);
      }
      setLoad(false);
    }, 3000);
  };

  const clearAsyncStorage = async () => {
    AsyncStorage.clear();
    getCoins();
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.flatlistStyle}
        showsVerticalScrollIndicator={false}
        data={state?.coins.slice(0, slice)}
        renderItem={renderItem}
        onEndReached={fetchMore}
        ListHeaderComponent={
          <View>
            <Text style={styles.header}>{strings.coinList}</Text>
          </View>
        }
        ListFooterComponent={
          <View>
            {slice < state.coins.length && load && (
              <ActivityIndicator size="large" color={colors.secondary} />
            )}
          </View>
        }
        refreshControl={
          // Flatlisti reflesh ederseniz listeyi resetliyor. Asyncstore'dan verileri silip api'dan verileri tekrar çekiyor.
          <RefreshControl
            refreshing={refreshing}
            onRefresh={async () => {
              setRefreshing(true);
              await clearAsyncStorage();
              setRefreshing(false);
            }}
            tintColor={colors.secondary}
          />
        }
      />
    </SafeAreaView>
  );
};

export default CoinList;
