import * as React from 'react';
import {
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { appConstant } from '@/app/helper/appConstant';
import { Button, FontText } from '@/app/components';
import { hp, normalize, wp } from '@/app/helper/responsiveScreen';
import colors from '@/app/assets/colors';
import CustomInput from '@/app/components/Input/CustomInput';
import CustomPassword from '@/app/components/Input/CustomPassword';
import SvgIcons from '@/app/assets/svgIcons';

import s from './style';

const cfg = {
  validationSchema: Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
    rememberMe: Yup.boolean(),
  }),
}

const Login = ({navigation}: any) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: appConstant.logIn,
      headerTitleStyle: s.headerTitle,
      headerLeft: () => (
        <TouchableOpacity style={s.backIcon}>
          <SvgIcons.BackIcon />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

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
            <Formik
              initialValues={{
                email: 'test@mail.com',
                password: '123456',
                rememberMe: false,
              }}
              validationSchema={cfg.validationSchema}
              onSubmit={(values) => console.log(values)}
            >
              {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, errors }) => (
                <React.Fragment>
                  <CustomInput
                    title={appConstant.email}
                    placeHolder="Enter Email"
                    name="email"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    value={values.email}
                    error={errors.email}
                  />
                  <CustomPassword
                    title={appConstant.password}
                    placeHolder="Enter Password"
                    name="password"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    value={values.password}
                    error={errors.password}
                    viewStyle={{ marginTop: hp(-2) }}
                  />
                  <View style={s.forgotPassContainer}>
                    <TouchableOpacity
                      style={s.rememberView}
                      onPress={() => setFieldValue('rememberMe', !values.rememberMe)}>
                      {values.rememberMe ? (
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
                    onPress={() => handleSubmit()}
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
                  </React.Fragment>
              )}
            </Formik>
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
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Login;
