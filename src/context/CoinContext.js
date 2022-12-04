// Uygulama ilk açıldığında Api'dan verileri çekip ekrana basıyorum.
// Uygulama Api'den sadece veri çektiği için veriyi tek seferde çekip AsyncStorage'da tuttum ve buradan dağıttım.
// Eğer Flatlist'i reflesh ederseniz verileri tekrar Api'den çekip AsyncStorage'ı temizliyorum.

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import {COINLIST_URL} from '../config/url';
import CoinContextReducer from './CoinContextReducer';

const CoinContextProvider = ({children}) => {
  const initialState = {
    coins: [],
  };

  const [state, dispatch] = useReducer(CoinContextReducer, initialState);
  const [loading, setLoading] = useState(false);

  const getCoins = async () => {
    setLoading(true);
    try {
      const coins = await AsyncStorage.getItem('@coins');
      if (coins !== null) {
        setLoading(false);
        return dispatch({type: 'GET_COINS', payload: JSON.parse(coins)});
      }
      const response = await axios.get(COINLIST_URL);
      dispatch({
        type: 'GET_COINS',
        payload: response.data.Data,
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@coins', jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@coins');

      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (state?.coins?.length > 0) {
      storeData(state.coins);
    }
  }, [state.coins]);

  useEffect(() => {
    getData();
    getCoins();
  }, []);

  return (
    <CoinContext.Provider
      value={{
        state,
        dispatch,
        getCoins,
        loading,
      }}>
      {children}
    </CoinContext.Provider>
  );
};

export const CoinContext = createContext();
export const useCoinContext = () => useContext(CoinContext);
export default CoinContextProvider;
