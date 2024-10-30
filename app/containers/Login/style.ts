import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import {hp, wp} from '../../helper/responsiveScreen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  welcomeContainer: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: hp(4),
    borderTopRightRadius: hp(4),
    marginTop: hp(3),
    paddingHorizontal: wp(5.5),
  },
  welcomeHeader: {
    alignItems: 'center',
    marginHorizontal: wp(4),
  },
  headerText: {
    textAlign: 'center',
    width: wp(85),
  },
  loginBtn: {
    width: wp(90),
    marginTop: hp(6),
    borderRadius: hp(5),
  },
  textInputContainer: {
    width: wp(90),
    alignSelf: 'center',
  },
  textInput: {
    color: colors.black,
    padding: 0,
  },
  errorText: {
    height: hp(1),
  },
  showIcon: {
    padding: wp(3.5),
    left: wp(2.5),
  },
  forgotPassContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(1),
  },
  rememberView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  accountView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(6),
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.borderColor,
  },
  dividerText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: colors.darkGray,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
    width: '50%',
    marginTop: hp(2),
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
