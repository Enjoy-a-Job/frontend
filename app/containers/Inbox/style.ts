import { StyleSheet } from 'react-native';
import { hp, normalize, wp } from "@/app/helper/responsiveScreen";
import colors from "@/app/assets/colors";

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
  view: {
    padding: normalize(15),
    flex:1,
    justifyContent: 'center',
  },
  backIcon: {
    backgroundColor: colors.white,
    marginLeft: wp(5),
    padding: wp(2),
    borderRadius: wp(5),
  },
  headerTitle: {
    color: colors.black,
    fontFamily: 'inter-bold',
  },
  searchIcon: {
    backgroundColor: colors.white,
    marginRight: wp(5),
    padding: wp(3),
    borderRadius: wp(6),
  },
});
