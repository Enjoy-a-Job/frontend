import colors from "@/app/assets/colors"
import { hp, normalize, wp } from "@/app/helper/responsiveScreen"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
  iconView: {
    width: normalize(70),
    height: normalize(70),
    borderRadius: normalize(20),
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 2,
    borderWidth: normalize(5),
    borderColor: colors.white,
  },
  iconPaddingView: {
    width: normalize(80),
    height: normalize(80),
    borderRadius: normalize(40),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 2,
  },
  transparentIconView: {
    width: normalize(80.8),
    height: normalize(80.8),
    borderRadius: normalize(40),
    backgroundColor: colors.darkWhite,
    alignItems: 'center',
    justifyContent: 'center',
    top: wp(1),
    position: 'absolute',
    zIndex: 1,
  },
  titleView: {
    height: normalize(520),
    width: wp(90),
    backgroundColor: colors.white,
    marginTop: normalize(40),
    borderRadius: normalize(8),
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,
    elevation: 4,
  },
  subTitleView: {
    paddingTop: normalize(40),
  },
  title: {
    color: colors.darkGray,
    textAlign: 'center',
    fontFamily: 'inter-bold',
  },
  titleMenu: {
    color: colors.black,
    textAlign: 'center',
    fontFamily: 'inter-regular',
  },
  renderView: {
    alignItems: 'center',
    paddingHorizontal: wp(1),
  },
  renderMenuView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    marginVertical: normalize(10)
  },
  leftIconView: {
    overflow: 'hidden',
    alignSelf: 'center',
  },
  contentContainerStyle: {
    paddingHorizontal: normalize(25),
    flexGrow: 1,
  },
  loginBtn: {
    width: wp(45),
    marginTop: hp(2.5),
    borderRadius: normalize(50),
    height: normalize(50),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  flatListView: {
    height: '75%',
    zIndex: 3
  }
})