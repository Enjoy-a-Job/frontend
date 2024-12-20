import colors from "@/app/assets/colors"
import { hp, wp } from "@/app/helper/responsiveScreen"
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
    marginTop: hp(6.5),
    paddingHorizontal: wp(4),
  },
  backIcon: {
    backgroundColor: colors.white,
    marginLeft: wp(5),
    padding: wp(2),
    borderRadius: wp(5),
  },
  headerTitle: {
    color: colors.black,
    fontFamily: 'inter-medium',
  },
})