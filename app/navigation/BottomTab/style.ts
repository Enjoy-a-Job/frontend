import {Platform, StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import {normalize, wp} from '../../helper/responsiveScreen';

export default StyleSheet.create({
  tabContainer: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    position: 'absolute',
    elevation: 0,
    height: Platform.OS === 'ios' ? wp(16) : wp(14),
    paddingBottom: Platform.OS === 'ios' ? wp(1) : wp(0),
    paddingTop: wp(3),
  },
  tabHeader: {
    backgroundColor: colors.background,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  tabView: {
    margin: 0,
    backgroundColor: 'white',
  },
  middleTabView: {
    margin: 0,
    zIndex: -50,
  },
  middleTab: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    width: 56,
    backgroundColor: 'white',
    borderRadius: 35,
  },
  icon: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
  },
  border: {
    borderColor: colors.tabIcon,
    width: wp(5),
    borderWidth: 2,
    backgroundColor: colors.tabIcon,
  },
  topBorder: {
    borderBottomLeftRadius: normalize(20),
    borderBottomRightRadius: normalize(20),
    position: 'absolute',
    top: wp(-3.7),
    backgroundColor: colors.tabIcon,
  },
});
