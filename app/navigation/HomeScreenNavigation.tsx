import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screen/HomeScreen'
import CourseDetailScreen from '../screen/CourseDetailScreen'
import ChapterDetailScreen from '../screen/ChapterDetailScreen'

export type HomeStackParamList = {
  Home: undefined;
  CourseDetail: { course: any};
  ChapterDetail: { 
    content: any,
    chapterId: any,
    userCourseRecordId: any
  };
};

const Stack = createStackNavigator<HomeStackParamList>()

const HomeScreenNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Home'>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
      <Stack.Screen name="ChapterDetail" component={ChapterDetailScreen} />
    </Stack.Navigator>
  )
}

export default HomeScreenNavigation