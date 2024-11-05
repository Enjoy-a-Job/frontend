import { StyleSheet } from 'react-native';

import colors from '@/app/assets/colors';
import { hp, wp } from '@/app/helper/responsiveScreen';

export default StyleSheet.create({
  notification: {
    borderRadius: hp(1),
    padding: wp(2),
    marginBottom: hp(1),
  },
  primary: {
    backgroundColor: '#00d1b2',
    color: colors.white,
  },
  danger: {
    backgroundColor: '#f14668',
    color: colors.white,
  },
  warning: {
    backgroundColor: '#ffe08a',
    color: '#000000B3',
  },
  success: {
    backgroundColor: '#48c78e',
    color: colors.white,
  }
});