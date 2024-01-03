import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../../../utils/Colors'

const SubHeading = ({ text, color=Colors.BLACK }: any) => {
  return (
    <View style={{marginBottom: 5}}>
      <Text style={{
        fontFamily: 'Outfit_400Regular', fontSize: 17,
        fontWeight: 'bold',
        color: color
      }}>{text}</Text>
    </View>
  )
}

export default SubHeading