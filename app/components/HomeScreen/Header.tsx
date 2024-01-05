import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useUser, useAuth, SignedOut } from '@clerk/clerk-expo'
import Colors from '../../utils/Colors'
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Header = () => {
  const { isLoaded, isSignedIn, user } = useUser()
  const { signOut } = useAuth()
  return isLoaded && (
    <View>
      <View style={[styles.rowStyle, { justifyContent: 'space-between' }]}>
        <View style={styles.rowStyle}>
          <TouchableOpacity onPress={()=>signOut()}>
            <Image source={{ uri: user?.imageUrl }} style={{
              width: 50,
              height: 50,
              borderRadius: 25,
            }} />
          </TouchableOpacity>
          <View>
            <Text style={{ color: Colors.WHITE, fontFamily: "Outfit_400Regular" }}>Welcome,</Text>
            <Text style={styles.mainText}>{user?.fullName}</Text>
          </View>
        </View>
        <View style={styles.rowStyle}>
          <Image source={require('../../../assets/images/google.png')} style={{ height: 30, width: 30 }} />
          <Text style={styles.mainText}>13567</Text>
        </View>
      </View>
      <View style={{
        backgroundColor: Colors.WHITE, padding: 10,
        marginTop: 20, display: 'flex', flexDirection: 'row',
        justifyContent: 'space-between', borderRadius: 99,
        paddingLeft: 30, paddingRight: 20
      }}>
        <TextInput placeholder='Search Courses' style={{ fontFamily: 'Outfit_500Medium', width: '85%' }} />
        <Ionicons name="search-circle" size={30} color={Colors.LIGHT_PRIMARY} />
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  mainText: {
    color: Colors.WHITE,
    fontFamily: "Outfit_400Regular",
    fontSize: 20
  },
  rowStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  }
})