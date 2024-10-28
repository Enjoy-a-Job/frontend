import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import {normalize} from '../../helper/responsiveScreen';

export default StyleSheet.create({
  renderView: {
    marginVertical: normalize(10),
    marginHorizontal: normalize(4),
    width: '98%',
    flexDirection: 'row',
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
  priceView: {flexDirection: 'row', justifyContent: 'space-between'},
  priceText: {
    fontWeight: '500',
    lineHeight: normalize(15),
    color: colors.black,
  },
  reviewsText: {
    fontWeight: '400',
    lineHeight: normalize(15),
    color: colors.darkGray,
  },
  LessonsText: {
    fontWeight: '400',
    lineHeight: normalize(20),
    color: colors.darkGray,
  },
  LessonsView: {flexDirection: 'row', alignItems: 'center'},
  titleStyle: {fontWeight: '500', color: colors.black},
  detailView: {padding: normalize(10), flex: 1},
  iconView: {
    overflow: 'hidden',
    borderTopLeftRadius: normalize(8),
    borderBottomLeftRadius: normalize(8),
  },
  flexRow: {flexDirection: 'row' },
  oldPriceText: {
    fontWeight: '400',
    lineHeight: normalize(15),
    color: colors.darkGray,
    marginLeft: normalize(5),
    textDecorationLine: 'line-through',
  },
});
