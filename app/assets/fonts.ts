import * as Font from 'expo-font';

const useFonts = async () =>
  await Font.loadAsync({
    'inter-bold': require('./fonts/Inter-Bold.ttf'),
    'inter-semibold': require('./fonts/Inter-SemiBold.ttf'),
    'inter-medium': require('./fonts/Inter-Medium.ttf'),
    'inter-regular': require('./fonts/Inter-Regular.ttf'),
    'inter-light': require('./fonts/Inter-Light.ttf'),
  });

export default useFonts;