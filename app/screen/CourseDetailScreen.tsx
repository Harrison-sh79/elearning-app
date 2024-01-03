import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../utils/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CourseDetail from '../components/HomeScreen/Course/CourseDetail';


const CourseDetailScreen = ({ navigation, route }: any) => {

  return route.params.course && (
    <View style={{ padding: 10 }}>
      <TouchableOpacity  onPress={() => navigation.goBack()} >
        <Ionicons name="arrow-back-circle" size={40} color={Colors.WHITE}/>
      </TouchableOpacity>
      <CourseDetail course={route.params.course} />
    </View>
  )
}

export default CourseDetailScreen