import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import {wp} from '../../helper/responsiveScreen';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
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
});
