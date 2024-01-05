import { View, Text, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import RenderHtml from 'react-native-render-html';
import Colors from '../../../../utils/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ContentItem = ({ description, output }: any) => {
  const { width } = useWindowDimensions();
  const [isRun, setIsRun] = useState(false);
  return description && (
    <View>
      <RenderHtml
        contentWidth={width}
        source={{
          html: description
        }}
        tagsStyles={tagsStyles}
      />
      {output != null && (
        <View>
          <TouchableOpacity style={{
            borderRadius: 15, backgroundColor: Colors.LIGHT_PRIMARY, padding: 15,
            width: 100, marginTop: 10
          }} onPress={()=>setIsRun(true)} >
            <Text style={{
              fontFamily: 'Outfit_700Bold', fontSize: 14,
              color: Colors.WHITE, textAlign: 'center',
            }}>
              Run
            </Text>
          </TouchableOpacity>
        </View>
      )}
      {isRun && (
        <>
          <Text style={{
            fontFamily: 'Outfit_700Bold', fontSize: 17,
            marginTop: 15
          }}>Output</Text>
          <RenderHtml
            contentWidth={width}
            source={{
              html: output
            }}
            tagsStyles={outputStyles}
          />
        </>)}
    </View>
  )
}

export default ContentItem

const tagsStyles = {
  body: {
    fontFamily: 'Outfit_700Bold',
    fontSize: 17,
    color: Colors.BLACK,
    backgroundColor: Colors.WHITE,
    borderRadius: 15,
    padding: 10,
    marginTop: 15,
  },
  code: {
    backgroundColor: Colors.BLACK,
    color: Colors.WHITE,
    marginLeft: 10,
    marginRight: 30,
    borderWidth: 1,
    borderRadius: 25,
    padding: 10,
  }
}

const outputStyles = {
  body: {
    fontFamily: 'Outfit_700Bold',
    fontSize: 17,
    color: Colors.WHITE,
    backgroundColor: Colors.BLACK,
    borderRadius: 15,
    padding: 10,
    marginTop: 15,
  }
}