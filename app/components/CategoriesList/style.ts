import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import {normalize, wp} from '../../helper/responsiveScreen';

export default StyleSheet.create({
  iconView: {
    width: normalize(60),
    height: normalize(60),
    borderRadius: normalize(40),
    backgroundColor: colors.darkWhite,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    position: 'absolute',
    zIndex: 1,
    borderWidth: normalize(5),
    borderColor: colors.darkWhite,
  },
  titleView: {
    height: normalize(80),
    width: wp(26),
    backgroundColor: colors.white,
    marginTop: normalize(40),
    borderRadius: normalize(8),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,

    elevation: 4,
  },
  title: {
    fontWeight: '400',
    color: colors.darkGray,
    marginHorizontal: normalize(20),
    textAlign: 'center',
  },
  renderView: {
    marginVertical: normalize(10),
    alignItems: 'center',
    marginHorizontal: normalize(8),
  },
});
