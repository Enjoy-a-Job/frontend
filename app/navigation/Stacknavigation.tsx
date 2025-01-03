import {
  createStackNavigator,
  StackNavigationOptions
} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { RouteName } from '@/app/helper/routeName';

import Login from '@/app/containers/Login';
import Register from '@/app/containers/Register';
import Welcome from '@/app/containers/Welcome';
import colors from '@/app/assets/colors';
import MobileVerification from '@/app/containers/MobileVerification';
import { BottomTabNavigation } from './BottomTab/BottomTabNavigation';
import Categories from '@/app/containers/Categories';
import CategoriesMenuScreen from '@/app/containers/CategoriesMenuScreen';
import CategoriesMenuDetailsScreen from '@/app/containers/CategoriesMenuDetailsScreen';
import CourseDetailsScreen from '@/app/containers/CourseDetailsScreen';

const options = {
  headerShown: true,
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: colors.background,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0
  }
} as StackNavigationOptions;

export default function Stacknavigation() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName={RouteName.welcomeScreen}
        screenOptions={{ headerShown: false, headerBackTitleVisible: false }}
      >
        <Stack.Screen
          name={RouteName.welcomeScreen}
          component={Welcome}
          options={{ ...options, headerTitle: '' }}
        />
        <Stack.Screen
          name={RouteName.logInScreen}
          component={Login}
          options={options}
        />
        <Stack.Screen
          name={RouteName.registerScreen}
          component={Register}
          options={options}
        />
        <Stack.Screen
          name={RouteName.mobileVerificationScreen}
          component={MobileVerification}
          options={options}
        />
        <Stack.Screen
          name={RouteName.categoriesScreen}
          component={Categories}
          options={options}
        />
        <Stack.Screen
          name={RouteName.bottomTab}
          component={BottomTabNavigation}
        />
        <Stack.Screen
          name={RouteName.categoriesMenuScreen}
          component={CategoriesMenuScreen}
          options={options}
        />
        <Stack.Screen
          name={RouteName.categoriesMenuDetailsScreen}
          component={CategoriesMenuDetailsScreen}
          options={options}
        />
        <Stack.Screen
          name={RouteName.courseDetailsScreen}
          component={CourseDetailsScreen}
          options={options}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
