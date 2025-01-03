import colors from "@/app/assets/colors";
import { StyleSheet } from "react-native";
import { hp, normalize, wp } from "@/app/helper/responsiveScreen";

const styles = StyleSheet.create({
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
  chatListView: {
    flex: 1,
    paddingHorizontal: wp(4),
  },
  backIcon: {
    backgroundColor: colors.white,
    marginLeft: wp(5),
    padding: wp(2),
    borderRadius: wp(5),
  },
  headerMainView: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerSubView: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: normalize(10),
  },
  headerTitle: {
    color: colors.black,
    fontFamily: 'inter-medium',
    fontSize: normalize(16)
  },
  headerStatus: {
    color: colors.gray,
    fontFamily: 'inter-regular',
    fontSize: normalize(12)
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
  bottomSubView: {
    paddingTop: normalize(18),
    paddingHorizontal: normalize(15),
  }
});

export default styles