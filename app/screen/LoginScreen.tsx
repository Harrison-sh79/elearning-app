import { View, Text, Image, TouchableOpacity, Button } from 'react-native'
import * as WebBrowser from "expo-web-browser";
import React from 'react'
import Colors from '../utils/Colors'
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {

  // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive?.({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View style={{ alignItems: 'center', display: 'flex' }}>
      <Image source={require('../../assets/images/login.png')} style={{
        width: 500,
        height: 500,
        objectFit: 'contain',
        marginTop: 60,
      }} />
      <View style={{
        backgroundColor: Colors.PRIMARY,
        width: '100%',
        height: 600,
        marginTop: -60,
        padding: 20,
      }}>
        <Text style={{
          fontSize: 35, fontWeight: 'bold', color: Colors.WHITE,
          fontFamily: 'Outfit_700Bold', textAlign: 'center'
        }}>CodeBox</Text>
        <TouchableOpacity style={{
          backgroundColor: Colors.WHITE, padding: 10, display: 'flex', flexDirection: 'row', gap: 10,
          justifyContent: 'center', alignItems: 'center', borderRadius: 60, marginTop: 25
        }} onPress={onPress}>
          <Image source={require('../../assets/images/google.png')}
            style={{
              width: 25,
              height: 25,
            }}></Image>
          <Text style={{ color: Colors.PRIMARY, fontSize: 15, fontFamily: 'Outfit_600SemiBold' }}>Sign in with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginScreen
