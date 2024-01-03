import { View, Text, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import Colors from '../../../utils/Colors';

const CourseItem = ({item}: any) => {
  return (
    <View style={{ padding: 10, backgroundColor: Colors.WHITE, borderRadius: 15, marginRight: 15 }}>
            {/* Heading Images */}
            <Image source={{ uri: item.banner.url }} style={{
              width: 180,
              height: 100, borderRadius: 15
            }} />
            {/* Heading */}
            <View style={{ paddingTop: 15 }}>
              <Text style={{
                fontFamily: 'Outfit_400Regular',
                fontSize: 14, fontWeight: 'bold'
              }}>{item.name}</Text>
              {/* Charpter Information, chapters */}
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{
                  display: 'flex', flexDirection: 'row',
                  marginTop: 5, alignItems: 'center', gap: 5
                }}>
                  <Ionicons name="book-outline" size={18} color="black" />
                  <Text style={{ fontSize: 12, fontFamily: 'Outfit_400Regular' }}>{item.chapters.length} Chapters</Text>
                </View>
                <View style={{
                  display: 'flex', flexDirection: 'row',
                  marginTop: 5, alignItems: 'center', gap: 5
                }}>
                  <Ionicons name="md-time-outline" size={18} color="black" />
                  <Text style={{ fontSize: 12, fontFamily: 'Outfit_400Regular' }}>{item.time}Hr</Text>
                </View>
              </View>
              {/* Price Information */}
              <View style={{ marginTop: 5, marginBottom: 5 }}>
                <Text style={{
                  fontFamily: 'Outfit_500Medium', fontWeight: 'bold',
                  color: Colors.PRIMARY
                }}>{item.price === '0' ? 'Free' : '$' + item.price}</Text>
              </View>
            </View>
          </View>
  )
}

export default CourseItem