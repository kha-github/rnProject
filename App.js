import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import RootScreen from './screens/RootScreen';
import HomeScreen from "./screens/home/HomeScreen";
import ChatScreen from "./screens/chatting/ChatScreen";
import TaxiPayScreen from "./screens/taxiPay/TaxiPayScreen";
import SettingsScreen from "./screens/setting/SettingScreen";

export function App() {
  return (
    <RootScreen/>
  );
}

/*
* author : mina
* https://jeffgukang.github.io/react-native-tutorial/docs/router-tutorial/02-react-navigation-tab/react-navigation-tab-kr.html
*/

const TabNavigator = createBottomTabNavigator({
    "홈": {
      screen: HomeScreen,
    },
    "채팅": {
      screen: ChatScreen,
    },
    "프리미엄": {
      screen: TaxiPayScreen,
    },
    "환경설정": {
      screen: SettingsScreen,
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === "홈") {
          iconName = focused ? require('./assets/home/TabHomeActive.png') : require('./assets/home/TabHome.png');
        } else if (routeName === "채팅") {
          iconName = focused ? require('./assets/home/TabMessageActive.png') : require('./assets/home/TabMessage.png');
        } else if (routeName === "프리미엄") {
          iconName = focused ? require('./assets/home/TabVIPActive.png') : require('./assets/home/TabVIP.png');
        } else if (routeName === "환경설정") {
          iconName = focused ? require('./assets/home/TabSettingActive.png') : require('./assets/home/TabSetting.png');
        }
        return (
            <Image source={ iconName }/>
        );
      },
    }),
      tabBarOptions: {
          activeTintColor: '#FF9515',
          inactiveTintColor: 'gray',
          style: {
              backgroundColor: 'white',
          },
      },
  },
);

export default createAppContainer(TabNavigator);