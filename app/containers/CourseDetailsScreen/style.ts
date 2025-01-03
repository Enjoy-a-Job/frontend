import colors from "@/app/assets/colors"
import { hp, normalize, wp } from "@/app/helper/responsiveScreen"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  subContainer: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: hp(4),
    borderTopRightRadius: hp(4),
    marginTop: hp(3.5),
  },
  scrollView: {
    paddingHorizontal: wp(2),
  },
  backIcon: {
    backgroundColor: colors.white,
    marginLeft: wp(5),
    padding: wp(2),
    borderRadius: wp(5),
  },
  heartIcon: {
    backgroundColor: colors.white,
    marginRight: wp(5),
    padding: wp(3),
    borderRadius: wp(6),
  },
  headerTitle: {
    color: colors.black,
    fontFamily: 'inter-medium',
    fontSize: normalize(18)
  },
  name: {
    color: colors.black,
    fontFamily: 'inter-medium',
  },
  tag: {
    color: colors.black,
    fontFamily: 'inter-regular',
  },
  rating: {
    color: colors.gray,
    fontFamily: 'inter-regular',
  },
  profileView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(3),
    justifyContent: 'space-between',
    paddingHorizontal: normalize(6)
  },
  profileLastView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileFirstView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileSecondView: {
    paddingLeft: normalize(10)
  },
  ratingView: {
    marginHorizontal: normalize(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  aboutView: {
    paddingHorizontal: normalize(8),
    marginTop: normalize(20)
  },
  about: {
    color: colors.black,
    fontFamily: 'inter-medium',
  },
  description: {
    color: colors.gray,
    fontFamily: 'inter-regular',
    paddingTop: normalize(12)
  },
  hour: {
    marginTop: normalize(5),
    paddingHorizontal: normalize(8)
  },
  suggestion: {
    marginTop: normalize(10),
  },
  bottomView: {
    backgroundColor: colors.white,
    borderTopLeftRadius: hp(4),
    borderTopRightRadius: hp(4),
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  loginBtn: {
    width: wp(45),
    marginTop: hp(2),
    marginBottom: hp(2),
    borderRadius: normalize(50),
    height: normalize(45),
    justifyContent: 'center',
    alignSelf: 'center',
  },
})