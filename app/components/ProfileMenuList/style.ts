import {StyleSheet} from 'react-native';
import {normalize, wp} from '../../helper/responsiveScreen';

export default StyleSheet.create({
  titleStyle: {
    fontFamily:'inter-regular',
    textAlign:'center',
    alignSelf:'center',
    paddingLeft: wp(4)
  },
  renderView: {
    marginVertical: normalize(8),
    flexDirection:"row",
    justifyContent:'space-between'
  },
  subView: {
    flexDirection: "row",
  },
  iconView: {
    overflow: 'hidden',
    alignSelf: 'center',
  },
  contentContainerStyle:{
    paddingBottom: wp(25)
  }
});
