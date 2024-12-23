import { StyleSheet } from 'react-native';
import colors from '@/app/assets/colors';
import { normalize } from '@/app/helper/responsiveScreen';

export default StyleSheet.create({
  renderView: {
    marginVertical: normalize(10),
    marginHorizontal: normalize(4),
    width: '98%',
    backgroundColor: colors.white,
    borderRadius: normalize(8),
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 2,
  },
  subRenderView: {
    margin: normalize(15)
  },
  inRenderView: {
    flexDirection: 'row',
  },
  iconView: {
    overflow: 'hidden',
    borderTopLeftRadius: normalize(8),
    borderBottomLeftRadius: normalize(8),
  },
  name: {
    fontFamily: 'inter-medium',
    color: colors.black,
  },
  amount: {
    fontFamily: 'inter-bold',
    color: colors.gray
  },
  review: {
    fontFamily: 'inter-regular',
    color: colors.gray,
    paddingTop:normalize(8),
    lineHeight: normalize(20)
  },
  ratingView: {
    flexDirection: 'row',
    justifyContent: "space-between",
    width: '93%',
    paddingTop: normalize(1)
  },
  nameView: {
    flexDirection: 'column',
    justifyContent:'center',
    paddingHorizontal: normalize(8)
  }
});
