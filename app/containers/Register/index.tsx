import * as React from 'react';
import {
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
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

const Register = ({navigation}: any) => {
  const { t } = useTranslation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: t('app.register.header'),
      headerTitleStyle: s.headerTitle,
      headerLeft: () => (
        <TouchableOpacity style={s.backIcon} onPress={() => navigation.navigate(RouteName.welcomeScreen)}>
          <SvgIcons.BackIcon />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const cfg = {
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .required(t('app.register.name.required'))
        .email(t('app.register.name.invalid')),
      lastname: Yup.string()
        .required(t('app.register.last-name.required'))
        .email(t('app.register.last-name.invalid')),
      alias: Yup.string()
        .required(t('app.register.alias.required'))
        .email(t('app.register.alias.invalid')),
      phone: Yup.string()
        .required(t('app.register.phone.required'))
        .email(t('app.register.phone.invalid')),
      email: Yup.string()
        .required(t('app.register.email.required'))
        .email(t('app.register.email.invalid')),
      password: Yup.string()
        .required(t('app.register.password.required'))
        .min(8, t('app.register.password.minLength'))
        .matches(/[a-zA-Z]/, t('app.register.password.lettersRequired'))
        .matches(/[0-9]/, t('app.register.password.numbersRequired')),
      're-password': Yup.string()
        .required(t('app.register.password.required'))
        .oneOf([Yup.ref('password1')], t('app.register.password.match')),
    }),
  }

  const InputText = (
    { handleChange, handleBlur, name, values, errors, marginTop = -2 } : {
      handleChange: {
        (e: React.ChangeEvent<any>): void;
        <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
      }
      handleBlur: {
        (e: React.FocusEvent<any>): void;
        <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
    }
      name: string,
      values: Record<string, any>,
      errors: Record<string, any>,
      marginTop?: number
    }) => (
    <CustomInput
      title={t(`app.register.${name}.title`)}
      placeHolder={t(`app.register.${name}.placeholder`)}
      name={name}
      handleChange={handleChange}
      handleBlur={handleBlur}
      value={values[name]}
      error={errors[name]}
      viewStyle={{ marginTop: hp(marginTop) }}
    />
  )

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View style={s.container}>
            <View style={s.welcomeContainer}>
              <View style={s.welcomeHeader}>
                <FontText
                  name={'inter-semibold'}
                  size={normalize(24)}
                  color={colors.black}
                  style={s.headerText}
                  pTop={hp(4)}
                >
                  {t('app.register.title')}
                </FontText>
                <FontText
                  name={'inter-regular'}
                  size={normalize(16)}
                  color={colors.gray}
                  style={s.headerText}
                  pTop={hp(2)}
                >
                  {t('app.register.description')}
                </FontText>
              </View>
  
              {/* Formik Form */}
              <Formik
                initialValues={{
                  name: '',
                  lastname: '',
                  alias: '',
                  phone: '',
                  email: '',
                  password: '',
                  're-password': '',
                }}
                validationSchema={cfg.validationSchema}
                onSubmit={(values) => {
                  console.log(values);
                  navigation.replace(RouteName.bottomTab);
                }}
              >
                {(params) => (
                  <>
                    <InputText {...params} name="name" marginTop={2} />
                    <InputText {...params} name="lastname" />
                    <InputText {...params} name="alias" />
                    <InputText {...params} name="phone" />
                    <CustomInput
                      title={t('app.register.email.title')}
                      placeHolder={t('app.register.email.placeholder')}
                      name="email"
                      handleChange={params.handleChange}
                      handleBlur={params.handleBlur}
                      value={params.values.email}
                      error={params.errors.email}
                      viewStyle={{ marginTop: hp(-2) }}
                    />
                    <CustomPassword
                      title={t('app.register.password.title')}
                      placeHolder={t('app.register.password.placeholder')}
                      name="password"
                      handleChange={params.handleChange}
                      handleBlur={params.handleBlur}
                      value={params.values.password}
                      error={params.errors.password}
                      viewStyle={{ marginTop: hp(-2) }}
                    />
                    <CustomPassword
                      title={t('app.register.password.title')}
                      placeHolder={t('app.register.password.placeholder')}
                      name="re-password"
                      handleChange={params.handleChange}
                      handleBlur={params.handleBlur}
                      value={params.values['re-password']}
                      error={params.errors['re-password']}
                      viewStyle={{ marginTop: hp(-2) }}
                    />
                    <Button
                      onPress={() => params.handleSubmit()}
                      bgColor={colors.primary}
                      style={s.loginBtn}
                      buttonHeight={wp(14)}
                    >
                      <FontText
                        name={'poppins-semibold'}
                        size={normalize(16)}
                        color={colors.white}
                      >
                        {t('logIn')}
                      </FontText>
                    </Button>
                  </>
                )}
              </Formik>
  
              <View style={s.accountView}>
                <FontText
                  name={'inter-regular'}
                  size={normalize(13)}
                  color={colors.black}
                  pTop={hp(2)}
                >
                  {t('app.register.haveAccount')}
                </FontText>
                <TouchableOpacity
                  style={{ marginLeft: hp(0.25) }}
                  onPress={() => navigation.navigate(RouteName.logInScreen)}
                >
                  <FontText
                    name={'inter-regular'}
                    size={normalize(13)}
                    color={colors.primary}
                    pTop={hp(2)}
                  >
                    {t('app.login')}
                  </FontText>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );  
};

export default Register;
