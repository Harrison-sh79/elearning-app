import { View, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../utils/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CourseDetail from '../components/HomeScreen/Course/CourseDetail';
import ChapterList from '../components/HomeScreen/Course/ChapterList';


const CourseDetailScreen = ({ navigation, route }: any) => {

  return route.params.course && (
    <ScrollView style={{ padding: 10 }}>
      <View style={{ zIndex: 10}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle" size={40} color={Colors.WHITE}/>
        </TouchableOpacity>
      </View>
      <CourseDetail course={route.params.course} />
      <ChapterList chapterList={route.params.course.chapters}/>
    </ScrollView>
  )
}

export default CourseDetailScreen