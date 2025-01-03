import colors from "@/app/assets/colors";
import { StyleSheet } from "react-native";
import { hp, normalize } from "@/app/helper/responsiveScreen";

const styles = StyleSheet.create({
  messageContainer: {
    backgroundColor: colors.lightGray,
    padding: normalize(15),
    borderTopRightRadius: normalize(20),
    borderTopLeftRadius: normalize(20),
    borderBottomRightRadius: normalize(20),
    marginLeft: normalize(8)
  },
  subView: {
    maxWidth: '70%',
    marginBottom: normalize(15),
  },
  userSubView: {
    maxWidth: '60%',
    marginBottom: normalize(15),
    alignSelf: 'flex-end',
  },
  userContainer: {
    backgroundColor: colors.primary,
    borderTopRightRadius: normalize(20),
    borderTopLeftRadius: normalize(20),
    borderBottomLeftRadius: normalize(20),
    padding: normalize(15),
    alignSelf: 'flex-end',
  },
  messageText: {
    fontFamily: 'inter-regular',
    color: colors.black,
  },
  userMessageText: {
    color: colors.white,
    fontFamily: 'inter-regular',
  },
  view: {
    flexDirection: 'row',
  },
  timeText: {
    color: colors.gray,
    fontFamily: 'inter-regular',
    textAlign: 'right',
    paddingTop: normalize(5)
  },
  userTimeText: {
    color: colors.gray,
    fontFamily: 'inter-regular',
    paddingTop: normalize(5),
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