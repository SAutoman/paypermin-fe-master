// BottomTabNavigator.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/user/Home';
import Appointments from '../../screens/user/Appointments';
import History from '../../screens/user/History';
import Profile from '../../screens/user/Profile';
import colors from '../../data/colors';
import { LinearGradient } from "expo-linear-gradient";
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Appointments') {
            iconName = 'calendar-alt';
          } else if (route.name === 'History') {
            iconName = 'history';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          }

          // You can return any component that you like here!
          if (focused) {
            return (
              <LinearGradient
                colors={[colors.secondary, colors.primary]}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 0 }}
                style={{ borderRadius: 10, justifyContent:'center', alignItems:'center', width: 40, height: 40, }}
              >
                <Icon name={iconName} size={20} color={color} />
              </LinearGradient>
            );
          } else {
            return <Icon name={iconName} size={22} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
        showLabel: false,  // this will hide the label
      }}
    >



      <Tab.Screen name="Home" component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="Appointments" component={Appointments}
        options={{
          headerTitle: 'Appointments',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 24,
            color: colors.primary,
          },
        }}
      />
      <Tab.Screen name="History" component={History}
        options={{
          headerTitle: 'History',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 24,
            color: colors.primary,
          },
        }}
      />
      <Tab.Screen name="Profile" component={Profile}
        options={{
          headerTitle: 'Profile',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 24,
            color: colors.primary,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
