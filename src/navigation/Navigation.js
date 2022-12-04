import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CoinDetail from '../screens/CoinDetail';
import CoinList from '../screens/CoinList';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="CoinList"
          component={CoinList}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="CoinDetail"
          component={CoinDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
