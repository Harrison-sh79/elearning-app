import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import {
  useFonts, Outfit_400Regular, Outfit_100Thin, Outfit_200ExtraLight,
  Outfit_300Light, Outfit_500Medium, Outfit_600SemiBold, Outfit_700Bold,
  Outfit_800ExtraBold, Outfit_900Black
} from '@expo-google-fonts/outfit';
import LoginScreen from './app/screen/LoginScreen';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import Constants from "expo-constants"
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './app/navigation/TabNavigation';
import { RootSiblingParent } from 'react-native-root-siblings'
import { CompleteChapterContext } from './app/context/CompleteChapterContext';
import { useState } from 'react';

export default function App() {

  const [isChapterCompleted, setIsChapterCompleted] = useState(false)

  let [fontsLoaded, fontError] = useFonts({
    Outfit_400Regular, Outfit_100Thin, Outfit_200ExtraLight,
    Outfit_300Light, Outfit_500Medium, Outfit_600SemiBold, Outfit_700Bold,
    Outfit_800ExtraBold, Outfit_900Black
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  

  return (
    <ClerkProvider publishableKey={Constants.expoConfig?.extra?.clerkPublishableKey}>
      <CompleteChapterContext.Provider value={{isChapterCompleted, setIsChapterCompleted}}>
        <RootSiblingParent>
          <SafeAreaView style={styles.container}>
            <SignedIn>
              <NavigationContainer>
                <TabNavigation />
              </NavigationContainer>
            </SignedIn>
            <SignedOut>
              <LoginScreen />
            </SignedOut>
          </SafeAreaView>
        </RootSiblingParent>
      </CompleteChapterContext.Provider>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40,
  },
});
