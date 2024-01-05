import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../../../../utils/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ProgressBar = ({ contentLength, contentIndex }: any) => {
  const arraySize = Array.from({ length: contentLength }, (_, index) => index + 1)
  const width = 100 / contentLength
  return (
    <View>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        {arraySize.map((item, index) => (

          <View key={index} style={{
            backgroundColor: `${index <= contentIndex ? Colors.GREEN : Colors.GRAY }`,
            width: `${width}%`,
            borderRadius: 15, height: 10, margin: 5,
            flex: 1
          }}>
          </View>
        ))}
      </View>
    </View>
  )
}

export default ProgressBar