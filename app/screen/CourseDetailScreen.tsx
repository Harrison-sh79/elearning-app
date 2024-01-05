import { View, ScrollView, ActivityIndicator, Platform } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../utils/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CourseDetail from '../components/HomeScreen/Course/CourseDetail';
import ChapterList from '../components/HomeScreen/Course/ChapterList';
import { useUser } from '@clerk/clerk-expo';
import { enrollCourse, getUserEnrolledCourse } from '../services';
import Toast from 'react-native-root-toast'
import { CompleteChapterContext } from '../context/CompleteChapterContext';


const CourseDetailScreen = ({ navigation, route }: any) => {

  const { user } = useUser()
  const [userEnrolledCourse, setUserEnrolledCourse] = useState<any>([])
  const [isLoading, setIsLoading] = useState(true)
  const {isChapterCompleted, setIsChapterCompleted} = useContext(CompleteChapterContext)

  useEffect(() => {
    if (route.params.course && user) {
      getUserEnrolledCourse_()
    }
  }, [
    route.params.course,
    user
  ])

  useEffect(() => {
    isChapterCompleted && getUserEnrolledCourse_()
  },[isChapterCompleted])

  const UserEnrollCourse = async () => {
    
    console.log(route.params.course.id)
    console.log(user?.primaryEmailAddress?.emailAddress)
    setIsLoading(true)
    const response = await enrollCourse(route.params.course.id, user?.primaryEmailAddress?.emailAddress)
    if (response) {
      Toast.show('Course enrolled successfully', {
        duration: 1000,
        position: Toast.positions.CENTER,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      })
      getUserEnrolledCourse_()
    }
  }

  const getUserEnrolledCourse_ = async () => {
    try {
      const response: any = await getUserEnrolledCourse(route.params.course.id, user?.primaryEmailAddress?.emailAddress)
      setUserEnrolledCourse(response?.userEnrolledCourses)
      setIsLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle errors appropriately
      setIsLoading(false);
    }
  }

  return (isLoading && route.params.course ?
    <ActivityIndicator size="large" color={Colors.PRIMARY} style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}/> :
    (<ScrollView style={{ padding: 10 }}>
      <View style={{ zIndex: 10 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle" size={40} color={Colors.WHITE} />
        </TouchableOpacity>
      </View>
      <CourseDetail course={route.params.course} enrollCourse={UserEnrollCourse}
        userEnrolledCourse={userEnrolledCourse} />
      {/* <ActivityIndicator size="small" color={Colors.PRIMARY} /> */}
      <ChapterList chapterList={route.params.course.chapters}
        userEnrolledCourse={userEnrolledCourse} />
    </ScrollView>)
  )
}

export default CourseDetailScreen