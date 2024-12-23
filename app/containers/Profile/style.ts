import { Platform, StyleSheet } from 'react-native';
import colors from '@/app/assets/colors';
import { wp, hp, normalize } from '@/app/helper/responsiveScreen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  subContainer: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: hp(4),
    borderTopRightRadius: hp(4),
    marginTop: hp(6.5),
    paddingHorizontal: wp(5.5),
  },
  titleEmailView: {
    paddingTop: hp(5)
  },
  profileView: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 2,
    left: 0,
    right: 0
  },
  cameraView: {
    position: 'absolute',
    height: 10,
    width: 10,
    top: 48
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
    fontSize: normalize(18)
  },
  profile: {
    width: 128,
    height: 128,
  },
  titleText: {
    textAlign: 'center',
    fontFamily: 'inter-semibold',
  },
  emailText: {
    textAlign: 'center',
    fontFamily: 'inter-regular',
  },
  flatView: {
    flex: 1,
    marginTop: wp(5)
  }
});
