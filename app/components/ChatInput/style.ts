import { StyleSheet } from 'react-native';
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: normalize(5)
  },
});
