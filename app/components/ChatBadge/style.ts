import colors from "@/app/assets/colors";
import { normalize } from "@/app/helper/responsiveScreen";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  badge: {
    height: normalize(10),
    width: normalize(10),
    borderRadius: normalize(10),
    borderColor: colors.white,
    borderWidth: 1,
    left: normalize(30),
    bottom: 12,
  },
  badgeOnlineColor: {
    backgroundColor: colors.primary,
  },
  badgeOfflineColor: {
    backgroundColor: colors.gray,
  }
})

export default styles;