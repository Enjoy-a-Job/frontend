import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { RouteName } from '../helper/routeName';
import Login from '../containers/Login';
import colors from '../assets/colors';
import { BottomTabNavigation } from './BottomTab/BottomTabNavigation';

export default function Stacknavigation() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName={RouteName.logInScreen}
        screenOptions={{headerShown: false, headerBackTitleVisible: false}}>
        <Stack.Screen
          name={RouteName.logInScreen}
          component={Login}
          options={{ headerShown: true, headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: colors.background,
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
          }}
        />
        <Stack.Screen name={RouteName.bottomTab} component={BottomTabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

