import { View, Text, Dimensions, ScrollView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import ProgressBar from './ProgressBar'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import ContentItem from './ContentItem'
import Colors from '../../../../utils/Colors'
import { useNavigation } from '@react-navigation/native'

const Content = ({ content, onChapterFinish }: any) => {

  const [selectedIndex, setSelectedIndex] = useState(0)
  const navigation = useNavigation();
  const flatListRef: any = useRef();
  const onNextBtnPress = (index: any) => {
    if (content?.length <= index + 1) {
      // navigation.goBack();
      onChapterFinish();
      return;
    }
    setSelectedIndex(index + 1)
    flatListRef.current.scrollToIndex({ animated: true, index: index + 1 })

  }

  return (
    <View style={{ width: '100%' }}>
      <ProgressBar contentLength={content.length}
        contentIndex={selectedIndex}
      />
      <FlatList
        data={content}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ref={flatListRef}
        pagingEnabled
        renderItem={({ item, index }) => (
          <View style={{
            width: Dimensions.get('screen').width * 0.89,
            marginRight: 7,
          }}>
            <ScrollView style={{ marginBottom: 90 }}>
              <Text style={{ fontFamily: 'Outfit_700Bold', fontSize: 20, marginTop: 15 }}>{item.heading}</Text>
              <ContentItem description={item?.content?.html}
                output={item?.output?.html}
              />
            </ScrollView>
            <View style={{position:'absolute', bottom:20, width: '100%', 
          alignSelf:'flex-end'}}>
              <TouchableOpacity onPress={() => onNextBtnPress(index)} 
              style={{backgroundColor: Colors.PRIMARY, padding: 15,
              borderRadius: 15
              }}>
                <Text style={{
                  fontFamily: 'Outfit_700Bold', fontSize: 14,
                  color: Colors.WHITE, textAlign: 'center',
                }}>{content.length > index + 1 ? 'Next' : 'Finish'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  )
}

export default Content