import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import Colors from '../../../utils/Colors'
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'
import { HomeStackParamList } from '../../../navigation/HomeScreenNavigation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Toast from 'react-native-root-toast';
import { CompleteChapterContext } from '../../../context/CompleteChapterContext';

type homeScreenProp = StackNavigationProp<HomeStackParamList, 'ChapterDetail'>

const ChapterList = ({ chapterList, userEnrolledCourse }: any) => {

  const navigation = useNavigation<homeScreenProp>();

  const { isChapterCompleted, setIsChapterCompleted } = useContext(CompleteChapterContext)

  const onChapterChange = (chapter: any) => {
    if (userEnrolledCourse?.length <= 0) {
      Toast.show('Please enroll first', {
        duration: 1000,
        position: Toast.positions.CENTER,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
      return
    } else {
      setIsChapterCompleted(false)
      navigation.navigate('ChapterDetail', {
        content: chapter.chapters,
        chapterId: chapter.id,
        userCourseRecordId: userEnrolledCourse[0].id
      })
    }

  }

  const checkIsChapterCompleted = (chapterId: any) => {
    if (userEnrolledCourse[0]?.completedChapter.length <= 0) {
      return false
    }
    const res = userEnrolledCourse[0]?.completedChapter.find((ch: any) => ch.chapterId === chapterId)
    return res
  }

  return (
    <View style={{
      padding: 15, backgroundColor: Colors.WHITE,
      borderRadius: 15, marginTop: 15
    }}>
      <Text style={{ fontFamily: 'Outfit_500Medium', fontSize: 21 }}>Chapters</Text>
      {chapterList.map((chapter: any, index: number) => (
        <TouchableOpacity key={index} style={[checkIsChapterCompleted(chapter.id) ? styles.completeChapter : styles.inCompleteChapter]}
          onPress={() => onChapterChange(chapter)}
        >
          <View style={{
            display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8,
          }}>
            {checkIsChapterCompleted(chapter.id) ? (
              <Ionicons name="checkmark-circle" size={30} color={Colors.GREEN} />
            ) : (
              <Text style={{ fontFamily: 'Outfit_500Medium', fontSize: 25, color: Colors.GRAY }}>{index + 1}</Text>
            )}
            <Text style={{ fontFamily: 'Outfit_500Medium', fontSize: 20, color: Colors.GRAY }}>{chapter.title}</Text>
          </View>

          {userEnrolledCourse?.length <= 0 ? (
            <Ionicons name="md-lock-closed" size={24} color={Colors.GRAY} />
          ) : (
            <Ionicons name="play-circle" size={30} color={checkIsChapterCompleted(chapter.id) ? Colors.GREEN : Colors.GRAY} />
          )}

        </TouchableOpacity>
      ))}
    </View>
  )
}

export default ChapterList

const styles = StyleSheet.create({
  inCompleteChapter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    borderColor: Colors.GRAY
  },
  completeChapter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    borderColor: Colors.GREEN,
    backgroundColor: Colors.LIGHT_GREEN
  }
})