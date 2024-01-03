import { View, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { getCourseList } from '../../services'
import SubHeading from './Course/SubHeading'
import Colors from '../../utils/Colors'
import CourseItem from './Course/CourseItem'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation, useRoute } from '@react-navigation/native'
import { name } from '../../../app.config'
import { StackNavigationProp } from '@react-navigation/stack'
import { HomeStackParamList } from '../../navigation/HomeScreenNavigation'


type homeScreenProp = StackNavigationProp<HomeStackParamList, 'Home'>

const CourseList = ({ level }: any) => {

  const [courses, setCourses] = React.useState([])

  useEffect(() => {
    getCourseList_();
  }, [level])

  const getCourseList_ = async () => {
    try {
      const response: any = await getCourseList(level)
      console.log(response)
      setCourses(response.pCourses)
    } catch (error) {
      console.log(error)
    }
  }

  const navigation = useNavigation<homeScreenProp>();

  return courses.length > 0 && (
    <View>
      <SubHeading text={level + ' Courses'} color={level == 'Basic' && Colors.WHITE} />
      <FlatList
        data={courses}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('CourseDetail', { course: item}) }>
            <CourseItem item={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default CourseList