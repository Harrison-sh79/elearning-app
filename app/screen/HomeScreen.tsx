import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/HomeScreen/Header'
import Colors from '../utils/Colors'
import CourseList from '../components/HomeScreen/CourseList'

const HomeScreen = () => {
  return (
    <View>
      <View style={{
        backgroundColor: Colors.PRIMARY,
        height: 250,
        padding: 20
      }}>
        <Header />
      </View>
      <View style={{padding: 20}}>
        <View style={{ marginTop: -80 }}>
          <CourseList level={'Basic'} />
        </View>
        <View style={{marginTop: 15}}>
          <CourseList level={'Advance'} />
        </View>
      </View>

    </View>
  )
}

export default HomeScreen