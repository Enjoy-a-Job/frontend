import colors from "@/app/assets/colors"
import { normalize } from "@/app/helper/responsiveScreen"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
  view:{
    flexDirection:'row',
    alignItems:'center',
  },
  container: {
    backgroundColor: colors.white,
    height: normalize(55),
    borderRadius: normalize(55),
    shadowColor: colors.gray,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 3,
    flexDirection: 'row',
    alignItems:'center',
    width:'95%',
    position: 'absolute',
    right: 0,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.black,
    width:'45%',
    borderRadius:normalize(45),
    height:normalize(45),
    zIndex: 1,

  },
  euroView: {
    backgroundColor: colors.black,
    width: '33%',
    borderRadius: normalize(50),
    height: normalize(50),
    borderColor: colors.white,
    borderWidth: 3,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  rightTitle: {
    fontFamily: 'inter-medium',
    color: colors.gray,
    textAlign: 'center',
    paddingRight: normalize(30)
  },
  euro:{
    fontFamily: 'inter-medium',
    color: colors.white,
    textAlign:'center',
  },
  euroHour: {
    fontFamily: 'inter-medium',
    color: colors.white,
    textAlign: 'center',
    paddingLeft:normalize(8)
  }
})