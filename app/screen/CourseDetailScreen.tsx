import { View, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../utils/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CourseDetail from '../components/HomeScreen/Course/CourseDetail';
import ChapterList from '../components/HomeScreen/Course/ChapterList';
import { useUser } from '@clerk/clerk-expo';
import { enrollCourse } from '../services';


const CourseDetailScreen = ({ navigation, route }: any) => {

  const { user } = useUser()

  const UserEnrollCourse = async () => {
    console.log(route.params.course.id)
    console.log(user?.primaryEmailAddress?.emailAddress)
    const response = await enrollCourse(route.params.course.id, user?.primaryEmailAddress?.emailAddress)
    console.log(response)
  }

  return route.params.course && (
    <ScrollView style={{ padding: 10 }}>
      <View style={{ zIndex: 10}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle" size={40} color={Colors.WHITE}/>
        </TouchableOpacity>
      </View>
      <CourseDetail course={route.params.course} enrollCourse={UserEnrollCourse}/>
      <ChapterList chapterList={route.params.course.chapters}/>
    </ScrollView>
  )
}

export default CourseDetailScreen