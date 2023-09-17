import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashBoardScreen from './DashBoardScreen';
import ProfileScreen from './ProfileScreen';
import NotificationScreen from './NotificationScreen';
import DocumentScreen from './DocumentScreen';
import {COLORS} from '../UiUtility/Constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.colorPrimary, // Customize header background color
        },
        headerTintColor: 'white', // Customize header text color
        headerTitleStyle: {
          fontWeight: 'bold', // Customize header title font weight
        },
        tabBarStyle: {
          backgroundColor: COLORS.colorPrimary, // Customize the tab bar background color
        },
        tabBarLabelStyle: {
          fontWeight: 'bold', // Customize tab label font weight
        },
        tabBarActiveTintColor: 'white', // Customize the active tab text color
        tabBarInactiveTintColor: 'gray', // Customize the inactive tab text color
      }}>
      <Tab.Screen
        name="Dashboard"
        component={DashBoardScreen}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({focused, color, size}) => (
            <Icon name={'dashboard'} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Icon name={'account-circle'} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({color, size}) => (
            <Icon name={'add-alert'} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Documents"
        component={DocumentScreen}
        options={{
          tabBarLabel: 'Documents',
          tabBarIcon: ({color, size}) => (
            <Icon name={'archive'} size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;
