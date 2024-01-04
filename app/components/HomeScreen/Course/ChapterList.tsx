import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../../../utils/Colors'
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

const ChapterList = ({ chapterList }: any) => {
  return (
    <View style={{ padding: 15, backgroundColor: Colors.WHITE, 
    borderRadius: 15, marginTop: 15 }}>
      <Text style={{ fontFamily: 'Outfit_500Medium', fontSize: 21 }}>Chapters</Text>
      {chapterList.map((chapter: any, index: number) => (
        <View key={index}  style={{display:'flex', flexDirection:'row', alignItems:'center',
        justifyContent:'space-between', padding: 10, borderWidth:1, borderRadius:10, 
        marginTop: 10, borderColor: Colors.GRAY}}>
          <View style={{
            display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8,
          }}>
            <Text style={{ fontFamily: 'Outfit_500Medium', fontSize: 25, color:Colors.GRAY }}>{index + 1}</Text>
            <Text style={{ fontFamily: 'Outfit_500Medium', fontSize: 20, color:Colors.GRAY }}>{chapter.title}</Text>
          </View>
          {/* <Ionicons name="play-circle" size={30} color={Colors.GRAY} /> */}
          <Ionicons name="md-lock-closed" size={24} color={Colors.GRAY} />
        </View>
      ))}
    </View>
  )
}

export default ChapterList