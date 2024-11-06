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
import { RegisterBody, register } from '@/api/authentication';

import s from './style';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

interface FormikValues extends RegisterBody {
  're-password': string;
};

const Register = ({navigation}: any) => {
  const { t } = useTranslation();
  const [errors, setErrors] = React.useState<Record<string, string[]> | null>(null);
  const { mutate: doPost, status } = useMutation({
    mutationFn: (body: RegisterBody) => register(body),
    onSuccess: (data) => {
      navigation.navigate(RouteName.mobileVerificationScreen, {
        phone: data.user.phone,
      });
    },
    onError: ({ response }: AxiosError) => {
      if (response?.status === 400 && response?.data) {
        setErrors(response?.data as Record<string, string[]>);
      }
      console.error('Registration error', response?.data);
    },
  });
  const cfg = {
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .required(t('app.register.name.required')),
      lastname: Yup.string()
        .required(t('app.register.last-name.required')),
      alias: Yup.string()
        .required(t('app.register.alias.required')),
      phone: Yup.string()
        .required(t('app.register.phone.required')),
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
        .oneOf([Yup.ref('password')], t('app.register.password.match')),
    }),
  };
  const handlePost = (values: FormikValues) => {
    Keyboard.dismiss();
    const { 're-password': _, ...body } = values;
    doPost(body);
  };


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

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset={80}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
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
              <Formik<FormikValues>
                initialValues={{
                  name: 'Francisco Javier',
                  lastname: 'Sánchez-Ostiz Erviti',
                  alias: 'spielberg',
                  phone: '636620170',
                  email: 'javier.sanchezostiz@gmail.com',
                  password: '$Tf29Sa#',
                  're-password': '$Tf29Sa#',
                }}
                validationSchema={cfg.validationSchema}
                onSubmit={handlePost}
              >
                {(params) => (
                  <>
                  {[
                    {
                      name: 'name',
                      marginTop: 2,
                    },
                    {
                      name: 'lastname',
                    },
                    {
                      name: 'alias',
                    },
                    {
                      name: 'phone',
                      dataDetectorType: 'phoneNumber' as 'phoneNumber',
                    },
                    {
                      name: 'email',
                    }
                  ].map((input) => {
                    const { marginTop = -2, name, ...rest } = input;
                    const key = name as keyof typeof params.values;
                    const error = (() => {
                      if (errors && errors[key]) {
                        return errors[key].join(', ');
                      }
                      if (params.touched[key]) {
                        return params.errors[key];
                      }
                      return '';
                    })();

                    return (
                      <React.Fragment key={key}>
                        <CustomInput
                          title={t(`app.register.${key}.title`)}
                          placeHolder={t(`app.register.${key}.placeholder`)}
                          name={key}
                          handleChange={params.handleChange}
                          handleBlur={params.handleBlur}
                          value={params.values[key]}
                          error={error}
                          viewStyle={{ marginTop: hp(marginTop) }}
                          {...rest}
                        />
                      </React.Fragment>
                    )})}
                    <CustomPassword
                      title={t('app.register.password.title')}
                      placeHolder={t('app.register.password.placeholder')}
                      name="password"
                      handleChange={params.handleChange}
                      handleBlur={params.handleBlur}
                      value={params.values.password}
                      error={params.touched.password ? params.errors.password : ''}
                      viewStyle={{ marginTop: hp(-2) }}
                    />
                    <CustomPassword
                      title={t('app.register.password.title')}
                      placeHolder={t('app.register.password.placeholder')}
                      name="re-password"
                      handleChange={params.handleChange}
                      handleBlur={params.handleBlur}
                      value={params.values['re-password']}
                      error={params.touched['re-password'] ? params.errors['re-password'] : ''}
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
                        {t('app.register')}
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
                  disabled={status !== 'idle'}
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
