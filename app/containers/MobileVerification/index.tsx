import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { AxiosError } from 'axios';

import { useTranslation } from 'react-i18next';
import { hp, normalize, wp } from '@/app/helper/responsiveScreen';
import colors from '@/app/assets/colors';
import { Button, FontText } from '@/app/components';
import { resendText, validateTwilioCode } from '@/api/authentication';
import { RouteName } from '@/app/helper/routeName';
import { useMutation } from '@tanstack/react-query';
import Alert from '@/app/components/Alert';
import { useDisplayAlert } from '@/app/contexts/DisplayAlert';

import styles from './style';

const cfg = {
  timer: 60 * 5,
};

interface Props {
  navigation: any;
  route: {
    params: {
      phone: string;
    };
  };
}

const OtpVerification = ({ route, navigation }: Props): React.ReactElement<Props> => {
  const { phone } = route.params;
  const [otp, setOtp] = React.useState<string[]>(new Array(6).fill(''));
  const [timer, setTimer] = React.useState<number>(cfg.timer); // 60 seconds timer
  const inputs = React.useRef<TextInput[]>([]);
  const { t } = useTranslation();
  const { displayAlert } = useDisplayAlert();

  const { mutate: requestSMS, status: requestSMSStatus } = useMutation({
    mutationFn: () => resendText({ phone }),
    onSuccess: (data) => {
      displayAlert({ type: 'success', message: data.message });
    },
    onError: ({ response }: AxiosError) => {
      displayAlert({ type: 'danger', message: t(`app.mobile-verification.error-sending-sms.status-${response?.status}`) });
    },
  });
  const { mutate: requestValidateCode, status: requestValidateCodeStatus } = useMutation({
    mutationFn: ({ code }: { code: string }) => validateTwilioCode({ phone, code }),
    onSuccess: () => {
      displayAlert({ type: 'success', message: t('app.mobile-verification.success') });
      setTimeout(() => {
        navigation.navigate(RouteName.logInScreen);
      }, 6 * 1000);
    },
    onError: ({ response }: AxiosError) => {
      displayAlert({ type: 'danger', message: t(`app.mobile-verification.error-validating-code.status-${response?.status}`) });
    },
  });

  // Handle OTP input
  const handleOtpChange = (value: string, index: number) => {
    const otpArray = [...otp];
    otpArray[index] = value;
    setOtp(otpArray);

    // Automatically focus the next input
    if (value && inputs.current[index + 1]) {
      inputs.current[index + 1]?.focus();
    }
  };

  // Resend code functionality
  const resendCode = () => {
    // Logic to resend the OTP
    setTimer(60); // Reset timer
    requestSMS();
  };

  const verifyOtp = () => {
    const otpValue = otp.join('');
    requestValidateCode({ code: otpValue });
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          clearInterval(interval);
          return prevTimer;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { minutes, seconds } = timer > 0
    ? { minutes: Math.floor((timer) / 60), seconds: (timer) % 60 }
    : { minutes: 0, seconds: 0 };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">

        <View style={styles.content}>
          <FontText
            name={'inter-semibold'}
            size={normalize(24)}
            color={colors.black}
            style={styles.headerText}
            pTop={hp(4)}
          >
            {t('app.mobile-verification.title')}
          </FontText>
          <FontText
            name={'inter-regular'}
            size={normalize(16)}
            color={colors.gray}
            style={styles.headerText}
            pTop={hp(2)}
          >
            {t('app.mobile-verification.description')}
          </FontText>
          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                value={digit}
                onChangeText={(value) => handleOtpChange(value, index)}
                keyboardType="numeric"
                maxLength={1}
                style={styles.otpInput}
                ref={(ref) => {
                  if (!ref) return;
                  inputs.current[index] = ref;
                }}
              />
            ))}
          </View>
          <FontText
            name={'inter-regular'}
            size={normalize(16)}
            color={colors.gray}
            style={styles.headerText}
            pTop={hp(2)}
          >
            {phone}
          </FontText>
          <Text style={styles.timer}>
            {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </Text>
          <Alert />
          <TouchableOpacity onPress={resendCode}>
            <Text style={styles.resendText}>
              {t('app.mobile-verification.re-send')}
            </Text>
          </TouchableOpacity>        
          <TouchableOpacity>
            <Button
              onPress={verifyOtp}
              bgColor={colors.primary}
              style={styles.btn}
              buttonHeight={wp(14)}
              disabled={otp.some((digit) => !digit)}
            >
              <FontText
                name={'poppins-semibold'}
                size={normalize(16)}
                color={colors.white}
              >
                {t('app.mobile-verification.verify')}
              </FontText>
            </Button>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

export default OtpVerification;
