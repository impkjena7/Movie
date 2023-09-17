import React from 'react';
import LoginScreen from './LoginScreen';
import ProfileScreen from './ProfileScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from './SignUpScreen';
import NotificationScreen from './NotificationScreen';
import DocumentScreen from './DocumentScreen';
import BottomTabNavigator from './TabNavigator';
import SignUpSuccessScreen from './SignUpSuccessScreen';
import MovieDetailsScreen from './MovieDetailsScreen';

const Stack = createNativeStackNavigator();

const Routers = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="DashBoard" component={BottomTabNavigator} />
      <Stack.Screen name="Notificaton" component={NotificationScreen} />
      <Stack.Screen name="Document" component={DocumentScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="SignUpSuccess" component={SignUpSuccessScreen} />
      <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
    </Stack.Navigator>
  );
};

export default Routers;
