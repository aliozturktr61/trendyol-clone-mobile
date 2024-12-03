import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import {
  CART,
  FAVORİTES,
  HOMESCREEN,
  NOTICE,
  NOTIFICATIONS,
  PROFİLE,
  TRENDYOLGO,
} from '../utils/routes';
import TrendyolGo from '../screens/trendyolGo';
import Profile from '../screens/profile';
import Cart from '../screens/cart';
import Favorites from '../screens/favorites';
import TabIcon from '../components/router/tabIcon';
import appColors from '../theme/colors';
import {Pressable, View} from 'react-native';
import {Notification, Sms} from 'iconsax-react-native';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        tabBarIcon: ({focused, color, size}) => {
          //hangi sayfaya tıklanırsa butonun altına onun ismi çıkması içi route.name verdik
          return (
            <TabIcon
              name={route.name}
              size={size}
              color={color}
              focused={focused}
            />
          );
        },

        headerRight: props => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Pressable
              style={{marginHorizontal: 6}}
              onPress={() => navigation.navigate(NOTICE)}>
              <Sms size="27" color={appColors.BLACK} />
            </Pressable>
            <Pressable
              style={{marginHorizontal: 6}}
              onPress={() => navigation.navigate(NOTIFICATIONS)}>
              <Notification size="27" color={appColors.BLACK} />
            </Pressable>
          </View>
        ),

        tabBarActiveTintColor: appColors.PRİMARY,
        tabBarInactiveTintColor: appColors.GRAY,
      })}>
      <Tab.Screen name={HOMESCREEN} component={HomeScreen} />
      <Tab.Screen name={TRENDYOLGO} component={TrendyolGo} />
      <Tab.Screen name={FAVORİTES} component={Favorites} />
      <Tab.Screen name={CART} component={Cart} />
      <Tab.Screen name={PROFİLE} component={Profile} />
    </Tab.Navigator>
  );
}
