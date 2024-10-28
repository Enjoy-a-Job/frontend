import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
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
  useEffect(() => {
    LoadFonts();
  }, []);

  return (
    <View style={styles.container}>
      <Stacknavigation />
    </View>
  );
};

export default App;
