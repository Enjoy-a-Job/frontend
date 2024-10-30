import { Platform, StyleSheet } from 'react-native';
import colors from '../../assets/colors';
import { hp, normalize } from '../../helper/responsiveScreen';

export default StyleSheet.create({
  mainView: {
    paddingTop: normalize(20),
    flex: 1,
    paddingHorizontal: normalize(20),
    marginBottom: Platform.OS === 'ios' ? normalize(30) : normalize(60),
  },
  container: {
    flex: 1,
    backgroundColor: colors.darkWhite,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 4,
    padding: normalize(10),
    backgroundColor: colors.white,
    borderRadius: normalize(8),
    marginBottom: hp(4),
  },
  loactionText: {
    fontWeight: '400',
    marginHorizontal: normalize(10),
    color: colors.darkGray,
    flex: 1,
  },
});
