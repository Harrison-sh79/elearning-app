import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screen/HomeScreen';
import MyCourse from '../screen/MyCourse';
import LeaderBoard from '../screen/LeaderBoard';
import ProfileScreen from '../screen/ProfileScreen';
import { FontAwesome, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import HomeScreenNavigation from './HomeScreenNavigation';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }}>
      <Tab.Screen name="Home" component={HomeScreenNavigation} options={() => {
        return {
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          )
        }
      }} />
      <Tab.Screen name="MyCourse" component={MyCourse} options={() => {
        return {
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome5 name="book-open" size={size} color={color} />
          )
        }
      }}/>
      <Tab.Screen name="LeaderBoard" component={LeaderBoard} options={() => {
        return {
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons name="leaderboard" size={size} color={color} />
          )
        }
      }}/>
      <Tab.Screen name="Profile" component={ProfileScreen} options={() => {
        return {
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons name="supervised-user-circle" size={size} color={color} />
          )
        }
      }}/>
    </Tab.Navigator>
  )
}

export default TabNavigation