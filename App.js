import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchFonts = () => {
   return Font.loadAsync({
    'open-sans': require('./assets/fonts/opensans_regular.ttf'),
    'open-sans-bold': require('./assets/fonts/opensans_bold.ttf')
  });
};

export default function App() {

  const [fontLoaded, setFontLoaded] =useState(false)

  if(!fontLoaded) {
    return <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}/>
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Open up App.js to start working on your app!</Text>
    </View>
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
