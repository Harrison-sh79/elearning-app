import { View, Text, ScrollView, Dimensions } from 'react-native'
import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../utils/Colors'
import Content from '../components/HomeScreen/Course/ChapterContent/Content'
import { AddCompletedChapter } from '../services'
import Toast from 'react-native-root-toast'
import { CompleteChapterContext } from '../context/CompleteChapterContext'

const ChapterDetailScreen = ({ navigation, route }: any) => {

  const { content, chapterId, userCourseRecordId } = route.params;

  const {isChapterCompleted, setIsChapterCompleted} = useContext(CompleteChapterContext)

  const onChapterFinish = async () => {
    console.log('onChapterFinish')
    const result = await AddCompletedChapter(userCourseRecordId, chapterId)
    if (result) {
      Toast.show('Course Completed!', {
        duration: 1000,
        position: Toast.positions.CENTER,
        shadow: true,
        animation: true, 
        hideOnPress: true,
        delay: 0,
      })
      setIsChapterCompleted(true)
      navigation.goBack();
    }
  }

  return content && (
    <View style={{ padding: 20, marginTop: 15, flex:1, position: 'relative',}}>
      <Content content={content}
        onChapterFinish={() => { onChapterFinish() }} />
    </View>
  )
}

export default ChapterDetailScreen