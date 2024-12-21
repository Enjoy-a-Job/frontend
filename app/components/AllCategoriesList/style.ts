import { StyleSheet } from 'react-native';
import colors from "@/app/assets/colors";
import { normalize, wp } from "@/app/helper/responsiveScreen";

export default StyleSheet.create({
  iconView: {
    width: normalize(60),
    height: normalize(60),
    borderRadius: normalize(40),
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    position: 'absolute',
    zIndex: 2,
    borderWidth: normalize(5),
    borderColor: colors.white,
  },
  transparentIconView: {
    width: normalize(58),
    height: normalize(58),
    borderRadius: normalize(38),
    backgroundColor: colors.darkWhite,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: wp(15),
    position: 'absolute',
    zIndex: 1,
  },
  titleView: {
    height: normalize(80),
    width: wp(26),
    backgroundColor: colors.white,
    marginTop: normalize(40),
    borderRadius: normalize(8),
    alignItems: 'center',
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
    color: colors.darkGray,
    marginHorizontal: normalize(10),
    textAlign: 'center',
    fontFamily: 'inter-regular',
  },
  renderView: {
    marginVertical: normalize(10),
    alignItems: 'center',
    paddingHorizontal: wp(1),
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
    flex: 1
  },
});
