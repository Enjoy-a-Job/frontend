import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import useFonts from './assets/fonts.ts';
import Stacknavigation from './navigation/Stacknavigation.tsx';

const LoadFonts = async () => {
  await useFonts();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await LoadFonts();
      setFontsLoaded(true);
    };
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stacknavigation />
    </View>
  );
};

export default App;
