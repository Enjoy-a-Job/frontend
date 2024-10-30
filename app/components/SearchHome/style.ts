import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';
import { normalize, wp } from '../../helper/responsiveScreen';

export default StyleSheet.create({
  searchView: {
    height: normalize(50),
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: normalize(50),
    marginBottom: normalize(20),
    paddingLeft: wp(4),
    alignItems: 'center',
    flexDirection: 'row',
  },
  filterView: {
    width: normalize(60),
    height: normalize(60),
    borderRadius: normalize(60),
    borderWidth: normalize(10),
    borderColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
