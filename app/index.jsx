import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import useFonts from './assets/fonts.ts';
import Stacknavigation from '../app/navigation/Stacknavigation';
import { DisplayAlertProvider } from '../app/contexts/DisplayAlert';

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

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
      await SplashScreen.hideAsync();
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
    <QueryClientProvider client={queryClient}>
      <DisplayAlertProvider>
        <View style={styles.container}>
          <Stacknavigation />
        </View>
      </DisplayAlertProvider>
    </QueryClientProvider>
  );
};

export default App;
