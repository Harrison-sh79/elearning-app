import { View, Text, Image, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../../utils/Colors'
import OptionItem from './OptionItem'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CourseDetail = ({ course }: any) => {
  return (
    <View>
      <View style={{
        marginLeft: -10, marginTop: -50, zIndex:-1,
        height: 200, width: Dimensions.get('screen').width, backgroundColor: Colors.PRIMARY
      }}></View>
      <View style={{ marginTop: -120, backgroundColor: Colors.WHITE, borderRadius: 15, padding: 5 }}>
        <Image source={{ uri: course.banner.url }}
          style={{
            width: '100%', height: 200, objectFit: 'cover'
          }}
        />
        <View style={{ paddingLeft: 25, paddingRight: 25 }}>
          <Text style={{
            fontFamily: 'Outfit_400Regular', fontSize: 20, marginTop: 10,
            marginBottom: 10, fontWeight: 'bold', paddingLeft: 5
          }}>{course.name}</Text>
          <View>
            <View style={styles.rowStyle}>
              <OptionItem value={course.chapters.length + ' Chapters'} icon={"book-outline"} />
              <OptionItem value={course.time + ' Hr'} icon={"md-time-outline"} />
            </View>
            <View style={styles.rowStyle}>
              <OptionItem value={course.author} icon={"person-circle-outline"} />
              <OptionItem value={course.level} icon={"cellular-outline"} />
            </View>
          </View>
          <View>
            <Text style={{
              fontFamily: 'Outfit_400Regular', fontSize: 20, marginTop: 10,
              marginBottom: 10, fontWeight: 'bold', paddingLeft: 5
            }}>Description</Text>
            <Text style={{
              fontFamily: 'Outfit_300Light', fontSize: 15,
              color: Colors.GRAY, lineHeight: 23, letterSpacing: 1, padding: 5,
              
            }}>{course.discription.markdown}</Text>
          </View>
          <View style={{display:'flex',flexDirection:'row',gap:10,justifyContent:'space-evenly'}}>
            <TouchableOpacity style={{padding: 15, backgroundColor: Colors.PRIMARY,
            borderRadius: 15, marginBottom: 15}}>
              <Text style={{fontFamily: 'Outfit_600SemiBold', color:Colors.WHITE,
              fontWeight:'bold', textAlign:'center', fontSize: 17}}>Enroll for Free</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{padding: 15, backgroundColor: Colors.SECONDERY,
            borderRadius: 15, marginBottom: 15}}>
              <Text style={{fontFamily: 'Outfit_600SemiBold', color:Colors.WHITE,
              fontWeight:'bold', textAlign:'center', fontSize: 17}}>Membership $2.99/Mon</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default CourseDetail

const styles = StyleSheet.create({
  rowStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5
  }
})