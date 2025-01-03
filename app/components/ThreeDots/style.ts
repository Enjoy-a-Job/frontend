import colors from "@/app/assets/colors";
import { normalize } from "@/app/helper/responsiveScreen";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: normalize(5)
  },
  dot: {
    width: normalize(6),
    height: normalize(6),
    borderRadius: normalize(3),
    marginHorizontal: normalize(3),
    backgroundColor: colors.dotGray
  }
});

export default styles;