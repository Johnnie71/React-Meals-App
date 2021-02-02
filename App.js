import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Ionicons } from '@expo/vector-icons';

import MealsNavigator from './navigation/MealsNavigator';
import  { enableScreens } from 'react-native-screens';

enableScreens();

const fetchFonts = () => {
   return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans_Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans_Bold.ttf'),
    //  Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
  });
};

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded) {
    return (
        <AppLoading
          startAsync={fetchFonts}
          onFinish={setFontLoaded(true)}
          onError={console.warn}
        />
    );
  }

  return (
    <MealsNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
