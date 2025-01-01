import {StyleSheet} from 'react-native';
import { normalize } from "@/app/helper/responsiveScreen";
import colors from "@/app/assets/colors";

export default StyleSheet.create({
  renderView: {
    marginVertical: normalize(20),
    marginLeft: normalize(8),
    backgroundColor: colors.white,
    borderRadius: normalize(8),
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 4,
  },
  iconView: {
    overflow: 'hidden',
    borderTopLeftRadius: normalize(8),
    borderTopRightRadius: normalize(8),
    borderBottomLeftRadius: normalize(8),
    borderBottomRightRadius: normalize(8),
  },
});
