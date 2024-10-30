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

import { Button, FontText } from '@/app/components';
import { hp, normalize, wp } from '@/app/helper/responsiveScreen';
import colors from '@/app/assets/colors';
import CustomInput from '@/app/components/Input/CustomInput';
import CustomPassword from '@/app/components/Input/CustomPassword';
import SvgIcons from '@/app/assets/svgIcons';
import { RouteName } from '@/app/helper/routeName';

import s from './style';
import { useTranslation } from 'react-i18next';

const Login = ({navigation}: any) => {
  const { t } = useTranslation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: t('logIn'),
      headerTitleStyle: s.headerTitle,
      headerLeft: () => (
        <TouchableOpacity style={s.backIcon}>
          <SvgIcons.BackIcon />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const cfg = {
    validationSchema: Yup.object().shape({
      email: Yup.string().email(t('invalidEmail')).required(t('emailRequired')),
      password: Yup.string().required(t('passwordRequired')),
      rememberMe: Yup.boolean(),
    }),
  }

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
                {t('welcome')}
              </FontText>
              <FontText
                name={'inter-regular'}
                size={normalize(16)}
                color={colors.gray}
                style={s.headerText}
                pTop={hp(2)}>
                {t('welcomeDescription')}
              </FontText>
            </View>
            <Formik
              initialValues={{
                email: 'test@mail.com',
                password: '123456',
                rememberMe: false,
              }}
              validationSchema={cfg.validationSchema}
              onSubmit={(values) => {
                console.log(values);
                navigation.replace(RouteName.bottomTab);
              }}
            >
              {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, errors }) => (
                <React.Fragment>
                  <CustomInput
                    title={t('email')}
                    placeHolder={t('emailPlaceholder')}
                    name="email"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    value={values.email}
                    error={errors.email}
                  />
                  <CustomPassword
                    title={t('password')}
                    placeHolder={t('passwordPlaceholder')}
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
                        {t('rememberMe')}
                      </FontText>
                    </TouchableOpacity>
                    <FontText
                      name={'inter-regular'}
                      size={normalize(13)}
                      color={colors.darkGray}>
                      {t('forgotPassword')}
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
                      {t('logIn')}
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
                {t('dontAccount')}
              </FontText>
              <TouchableOpacity>
                <FontText
                  name={'inter-regular'}
                  size={normalize(13)}
                  color={colors.primary}
                  pTop={hp(2)}>
                  {t('signUp')}
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
