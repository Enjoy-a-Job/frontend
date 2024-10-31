import * as React from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import logo from '@/app/assets/images/logo.png';
import { Button, FontText } from '@/app/components';
import { hp, normalize, wp } from '@/app/helper/responsiveScreen';
import colors from '@/app/assets/colors';
import SvgIcons from '@/app/assets/svgIcons';

import s from '@/app/containers/styles';
import { useTranslation } from 'react-i18next';
import { RouteName } from '@/app/helper/routeName';

const Welcome = ({navigation}: any) => {
  const { t } = useTranslation();
  
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <>
        <KeyboardAvoidingView style={{flex: 1}}>
          <View style={s.container}>
            <View style={styles.container}>
              <Image source={logo} style={styles.logo} />
            </View>
            <View style={styles.welcomeContainer}>
              <View style={s.welcomeHeader}>
                <FontText
                  name={'inter-semibold'}
                  size={normalize(24)}
                  color={colors.black}
                  style={s.headerText}
                  pTop={hp(4)}>
                  {t('app.welcome.title')}
                </FontText>
                <FontText
                  name={'inter-regular'}
                  size={normalize(16)}
                  color={colors.gray}
                  style={s.headerText}
                  pTop={hp(2)}>
                  {t('app.welcome.description')}
                </FontText>
              </View>
              <View style={s.rowCenter}>
                <Button
                  onPress={() => navigation.navigate(RouteName.registerScreen)}
                  bgColor={colors.primary}
                  style={s.btn}
                  buttonHeight={wp(14)}>
                  <FontText
                    name={'poppins-semibold'}
                    size={normalize(16)}
                    color={colors.white}>
                    {t('app.register')}
                  </FontText>
                </Button>
              </View>
              <View style={{ ...s.rowCenter, marginTop: 0 }}>
                <Button
                  onPress={() => navigation.navigate(RouteName.logInScreen)}
                  bgColor={colors.background}
                  style={{ ...s.btn, marginTop: hp(2) }}
                  buttonHeight={wp(14)}>
                  <FontText
                    name={'poppins-semibold'}
                    size={normalize(16)}
                    color={colors.black}>
                    {t('app.login')}
                  </FontText>
                </Button>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 128,
    height: 128,
    // resizeMode: 'contain', // Optional, fits the image within the bounds
  },
  welcomeContainer: {
    ...s.welcomeContainer,
    justifyContent: 'center',
    paddingTop: hp(6),
    paddingBottom: hp(30),
  },
});

export default Welcome;
