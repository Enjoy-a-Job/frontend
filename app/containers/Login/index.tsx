import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../assets/colors';
import {hp, normalize, wp} from '../../helper/responsiveScreen';
import {Button, FontText, Input} from '../../components';
import {appConstant} from '../../helper/appConstant';
import SvgIcons from '../../assets/svgIcons';
import s from './style';
import { RouteName } from '../../helper/routeName';
import { emailRegex } from '../../helper/constantData';

const Login = ({navigation}: any) => {
  const passwordRef: any = React.useRef();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberPassword, setRememberPassword] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `${appConstant.logIn}`,
      headerTitleStyle: s.headerTitle,
      headerLeft: () => (
        <TouchableOpacity
          style={s.backIcon}>
          <SvgIcons.BackIcon />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const onLoginPress = async () => {
    if (email === '' || !emailRegex.test(email)) {
      setEmailError(true);
    } else if (password === '' || password.length < 6) {
      setPasswordError(true);
    } else {
      navigation.replace(RouteName.bottomTab);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <View style={s.container}>
          <View style={s.welcomeContainer}>
            <View style={s.welcomeHeader}>
              <FontText
                name={'inter-semibold'}
                size={normalize(24)}
                color={colors.black}
                style={s.headerText}
                pTop={hp(4)}>
                {appConstant.welcome}
              </FontText>
              <FontText
                name={'inter-regular'}
                size={normalize(16)}
                color={colors.gray}
                style={s.headerText}
                pTop={hp(2)}>
                {appConstant.welcomeDescription}
              </FontText>
            </View>
            <View style={[s.textInputContainer]}>
              <Input
                withTitle
                title={appConstant.email}
                titlecolor={colors.black}
                autoCapitalize={'none'}
                titleSize={normalize(14)}
                placeholder={'Enter Email'}
                value={email}
                onChangeText={(text: any) => {
                  setEmail(text.trim());
                }}
                placeholderTextColor={colors.gray}
                keyboardType={'default'}
                returnKeyType={'next'}
                fontName={'inter-medium'}
                fontSize={normalize(14)}
                color={'blue'}
                inputStyle={s.textInput}
                onFocus={() => setEmailFocus(!emailFocus)}
                onBlur={() => setEmailFocus(!emailFocus)}
                onSubmit={() => passwordRef?.current.focus()}
                style={{
                  borderColor:
                    emailFocus === true
                      ? colors.primary
                      : colors.grayBorderColor,

                  height: hp(6),
                }}
              />
              {emailError === true && !emailRegex.test(email) ? (
                <FontText color={colors.red} size={normalize(12)} pLeft={wp(2)}>
                  {appConstant.emailError}
                </FontText>
              ) : (
                <FontText size={normalize(12)}> </FontText>
              )}
            </View>
            <View style={[s.textInputContainer, {marginTop: hp(-2)}]}>
              <Input
                withRightIcon
                withTitle
                ref={passwordRef}
                title={appConstant.password}
                titlecolor={colors.black}
                titleSize={normalize(14)}
                placeholder={'Enter Password'}
                secureTextEntry={showPassword === false ? true : false}
                value={password}
                placeholderTextColor={colors.gray}
                onChangeText={(text: any) => {
                  setPassword(text.trim());
                }}
                keyboardType={'default'}
                returnKeyType={'done'}
                blurOnSubmit
                onFocus={() => setPasswordFocus(!passwordFocus)}
                onBlur={() => setPasswordFocus(!passwordFocus)}
                inputStyle={[s.textInput]}
                fontName={'poppins-medium'}
                fontSize={normalize(14)}
                color={'blue'}
                style={{
                  borderColor:
                    passwordFocus === true
                      ? colors.primary
                      : colors.grayBorderColor,
                  height: hp(6),
                }}
                rightIcon={
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    style={s.showIcon}>
                    {showPassword === false ? (
                      <SvgIcons.HideIcon />
                    ) : (
                      <SvgIcons.ShowIcon />
                    )}
                  </TouchableOpacity>
                }
              />
              {passwordError === true && password.length < 6 ? (
                <FontText color={colors.red} size={normalize(12)} pLeft={wp(2)}>
                  {appConstant.passwordError}
                </FontText>
              ) : (
                <FontText size={normalize(12)}> {''}</FontText>
              )}
            </View>
            <View style={s.forgotPassContainer}>
              <TouchableOpacity
                style={s.rememberView}
                onPress={() => setRememberPassword(!rememberPassword)}>
                {rememberPassword === false ? (
                  <SvgIcons.EmptyCheckbox />
                ) : (
                  <SvgIcons.CheckboxIcon />
                )}
                <FontText
                  name={'inter-regular'}
                  size={normalize(13)}
                  color={colors.darkGray}
                  pLeft={wp(2)}>
                  {appConstant.rememberMe}
                </FontText>
              </TouchableOpacity>
              <FontText
                name={'inter-regular'}
                size={normalize(13)}
                color={colors.darkGray}>
                {appConstant.forgotPassword}
              </FontText>
            </View>

            <Button
              onPress={() => onLoginPress()}
              bgColor={colors.primary}
              style={s.loginBtn}
              buttonHeight={wp(14)}>
              <FontText
                name={'poppins-semibold'}
                size={normalize(16)}
                color={colors.white}>
                {appConstant.logIn}
              </FontText>
            </Button>
            <View style={s.accountView}>
              <FontText
                name={'inter-regular'}
                size={normalize(13)}
                color={colors.black}
                pTop={hp(2)}>
                {appConstant.dontAccount}
              </FontText>
              <TouchableOpacity>
                <FontText
                  name={'inter-regular'}
                  size={normalize(13)}
                  color={colors.primary}
                  pTop={hp(2)}>
                  {appConstant.signUp}
                </FontText>
              </TouchableOpacity>
            </View>

            <View style={s.dividerContainer}>
              <View style={s.dividerLine} />
              <Text style={s.dividerText}>{appConstant.orLogIn}</Text>
              <View style={s.dividerLine} />
            </View>

            <View style={s.socialContainer}>
              <TouchableOpacity>
                <SvgIcons.FacebookIcon />
              </TouchableOpacity>

              <TouchableOpacity>
                <SvgIcons.GoogleIcon />
              </TouchableOpacity>

              <TouchableOpacity>
                <SvgIcons.AppleIcon />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Login;
