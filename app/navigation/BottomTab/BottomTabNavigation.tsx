import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Text,
  View,
  Dimensions,
} from 'react-native';
import {getPathDown} from '../BottomTab/curve';
import {Svg, Path} from 'react-native-svg';
import {scale} from 'react-native-size-scaling';
import SvgIcons from '../../assets/svgIcons';
import {hp, wp} from '../../helper/responsiveScreen';
import colors from '../../assets/colors';
import Home from '../../containers/Home';
import Search from '../../containers/Search';
import Sms from '../../containers/Sms';
import Profile from '../../containers/Profile';
import Eduction from '../../containers/Eduction';
import styles from './style';

const Tab = createBottomTabNavigator();
export const BottomTabNavigation = () => {
  const maxWidth = Dimensions.get('window').width;
  const returnpathDown = getPathDown(maxWidth, 60, 50);

  const TabIconWithIndicator = ({focused, Icon}: any) => (
    <View style={styles.icon}>
      {focused && <View style={[styles.border, styles.topBorder]} />}
      <Icon
        height={hp(3)}
        width={wp(5.5)}
        fill={focused ? colors.tabIcon : colors.darkGray}
      />
    </View>
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: styles.tabHeader,
        tabBarStyle: styles.tabContainer,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarItemStyle: styles.tabView,
          tabBarIcon: ({focused}) => (
            <TabIconWithIndicator focused={focused} Icon={SvgIcons.Home} />
          ),
          tabBarLabel: () => <Text />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarItemStyle: styles.tabView,
          tabBarIcon: ({focused}) => (
            <TabIconWithIndicator
              focused={focused}
              Icon={SvgIcons.SearchIcon}
            />
          ),
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
        name="Sms"
        component={Sms}
        options={{
          tabBarItemStyle: styles.tabView,
          tabBarIcon: ({focused}) => (
            <TabIconWithIndicator focused={focused} Icon={SvgIcons.Sms} />
          ),
          tabBarLabel: () => <Text />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarItemStyle: styles.tabView,
          tabBarIcon: ({focused}) => (
            <TabIconWithIndicator focused={focused} Icon={SvgIcons.Profile} />
          ),
          tabBarLabel: () => <Text />,
        }}
      />
    </Tab.Navigator>
  );
};
