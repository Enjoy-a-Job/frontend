import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Text,
  View,
  Dimensions,
} from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { scale } from 'react-native-size-scaling';

import { FontText } from '@/app/components';
import { hp, normalize, wp } from '@/app/helper/responsiveScreen';
import colors from '@/app/assets/colors';
import Eduction from '@/app/containers/Eduction';
import getPathDown from '@/app/navigation/BottomTab/curve';
import Home from '@/app/containers/Home';
import Profile from '@/app/containers/Profile';
import Search from '@/app/containers/Search';
import Inbox from '@/app/containers/Inbox';
import SvgIcons from '@/app/assets/svgIcons';

import styles from './style';

const TabIcon = (
  {
    focused,
    Icon,
    label,
  }: {
    focused: boolean,
    Icon: React.FC<React.SVGProps<SVGSVGElement>>,
    label?: string,
  }) => (
  <>
    <View style={styles.icon}>
      {focused && <View style={[styles.border, styles.topBorder]} />}
      <Icon
        height={hp(2.5)}
        width={wp(5.5)}
        fill={focused ? colors.tabIcon : colors.darkGray}
      />
    </View>
    <FontText
      name="inter-light"
      size={normalize(10)}
      color={colors.gray}
      style={{ textAlign: 'center' }}
      pTop={hp(0.5)}>
      {label}
    </FontText>
  </>
);

const Tab = createBottomTabNavigator();
export const BottomTabNavigation = () => {
  const maxWidth = Dimensions.get('window').width;
  const returnpathDown = getPathDown(maxWidth, 60, 50);

  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: styles.tabHeader,
        tabBarStyle: styles.tabContainer,
      }}>
      <Tab.Screen
        name="Inicio"
        component={Home}
        options={{
          headerShown: false,
          tabBarItemStyle: styles.tabView,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              Icon={SvgIcons.Home}
              label="inicio"
            />),
          tabBarLabel: () => <Text />,
        }}
      />
      <Tab.Screen
        name="Buscar"
        component={Search}
        options={{
          tabBarItemStyle: styles.tabView,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              Icon={SvgIcons.SearchIcon}
              label="buscar"
            />),
          tabBarLabel: () => <Text />,
        }}
      />
      <Tab.Screen
        name="Eduction"
        component={Eduction}
        options={{
          unmountOnBlur: false,
          tabBarItemStyle: styles.middleTabView,
          tabBarIcon: () => (
            <View style={styles.middleTab}>
              <SvgIcons.Logo />
            </View>
          ),
          tabBarLabel: () => (
            <View>
              <Svg width={maxWidth} height={scale(60)}>
                <Path fill={'white'} {...{d: returnpathDown}} />
              </Svg>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarItemStyle: styles.tabView,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              Icon={SvgIcons.Sms}
              label="inbox"
            />),
          tabBarLabel: () => <Text />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarItemStyle: styles.tabView,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              Icon={SvgIcons.Profile}
              label="profile"
            />),
          tabBarLabel: () => <Text />,
        }}
      />
    </Tab.Navigator>
  );
};
