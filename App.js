import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';
import Register from './screens/Register';
import { LinearGradient } from 'expo-linear-gradient';
import colors from './data/colors';
import BottomTabNavigator from './components/layout/BottomTabUser';
import PersonalInfo from './screens/user/level1/PersonalInfo';
import PaymentInfo from './screens/user/level1/PaymentInfo';
import SwitchAccount from './screens/user/level1/SwitchAccount';
import DateTime from './screens/user/level1/DateTime';
import ProProfile from './screens/user/level1/ProProfile';
import Payment from './screens/user/level2/Payment';
import Congrats from './screens/user/level3/Congrats';
import Icon from 'react-native-vector-icons/FontAwesome5';


const Stack = createStackNavigator();

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['white', colors.primary, colors.secondary, 'white']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ padding: 20 }}
      >
        <Text style={styles.ppmText}>PAY / MIN</Text>
      </LinearGradient>
    </View>
  );
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds delay
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoading ? (
          <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name="Welcome" component={Login} options={
            {
              headerShown: true, headerTitleAlign: 'center',
              headerTitleStyle: {
                color: colors.primary,
                fontSize: 24,
              }
            }
          } />
        )}
        <Stack.Screen name="Create New Account" component={Register} options={
          {
            headerShown: true, headerTitleAlign: 'center',
            headerTitleStyle: {
              color: colors.primary,
              fontSize: 24,
            }
          }
        } />
        <Stack.Screen name="PersonalInfo" component={PersonalInfo} options={
          {
            headerShown: true, headerTitleAlign: 'center', headerTitle: 'Personal Info',
            headerTitleStyle: {
              color: colors.primary,
              fontSize: 24,
            }
          }
        } />
        <Stack.Screen name="PaymentInfo" component={PaymentInfo} options={
          {
            headerShown: true, headerTitleAlign: 'center', headerTitle: 'Payment Info',
            headerTitleStyle: {
              color: colors.primary,
              fontSize: 24,
            }
          }
        } />
        <Stack.Screen name="SwitchAccount" component={SwitchAccount} options={
          {
            headerShown: true, headerTitleAlign: 'center', headerTitle: 'Switch Account',
            headerTitleStyle: {
              color: colors.primary,
              fontSize: 24,
            }
          }
        } />
        <Stack.Screen name="DateTime" component={DateTime} options={
          {
            headerShown: true, headerTitleAlign: 'center', 
            headerTitle: 'Select Date & Time',
            headerTitleStyle: {
              color: colors.primary,
              fontSize: 24,
            }
          }
        } />
        <Stack.Screen name="ProProfile" component={ProProfile} options={
          {
            headerShown: true, headerTitleAlign: 'center', 
            headerTitle: 'Professional Profile',
            headerTitleStyle: {
              color: colors.primary,
              fontSize: 24,
            }
          }
        } />
        <Stack.Screen name="Payment" component={Payment} options={
          {
            headerShown: true, headerTitleAlign: 'center', 
            headerTitle: 'Payment',
            headerTintColor: 'white',
            headerTitleStyle: {
              color: 'white',
              fontSize: 24,
            },
            headerBackImage: () => <Icon name="chevron-circle-left" size={32} color='white' />,
            headerBackground: () => (
              <LinearGradient
                  colors={[colors.primary, colors.secondary]}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 0 }}
                  style={{ flex: 1 }}
              />
          ),
          }
        } />
        <Stack.Screen name="Congrats" component={Congrats} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="Login" component={Login} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="BottomTabs" component={BottomTabNavigator} options={{ 
          headerShown: false 
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },/* 
  welcome: {
    fontSize: 24,
    padding:20,
    textAlign:'center',
  }, */
  ppmText: {
    fontSize: 50,
    fontWeight: 'bold',
    padding: 20,
    color: 'white',
  }
});
