import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const OptionItem = ({ value, icon }: any) => {
  return (
    <View style={{
      display: 'flex', flexDirection: 'row',
      marginTop: 5, alignItems: 'center', gap: 5
    }}>
      <Ionicons name={icon} size={18} color="black" />
      <Text style={{ fontSize: 12, fontFamily: 'Outfit_400Regular' }}>{value}</Text>
    </View>
  )
}

export default OptionItem