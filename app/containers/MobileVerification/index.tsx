import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';

import style from './style';

const cfg = {
  timer: 60 * 5,
};

const OtpVerification = ({ navigation }): React.ReactElement => {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [timer, setTimer] = useState<number>(cfg.timer); // 60 seconds timer

  // Handle OTP input
  const handleOtpChange = (value, index) => {
    const otpArray = [...otp];
    otpArray[index] = value;
    setOtp(otpArray);

    // Automatically focus the next input
    if (value && index < 5) {
      const nextInput = `otpInput${index + 1}`;
      this[nextInput].focus();
    }
  };

  // Resend code functionality
  const resendCode = () => {
    // Logic to resend the OTP
    setTimer(60); // Reset timer
  };

  // Verify OTP
  const verifyOtp = () => {
    const otpValue = otp.join('');
    console.log('OTP Entered: ', otpValue);
    // Add logic to verify the OTP
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
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>OTP</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.verificationText}>Verification</Text>
          <Text style={styles.description}>
            6-digits pin has been sent to your email address, riedad2562@gmail.com
          </Text>

          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                value={digit}
                onChangeText={(value) => handleOtpChange(value, index)}
                keyboardType="numeric"
                maxLength={1}
                style={styles.otpInput}
                ref={(ref) => (this[`otpInput${index}`] = ref)}
              />
            ))}
          </View>

          <Text style={styles.timer}>
            {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </Text>

          <TouchableOpacity onPress={resendCode}>
            <Text style={styles.resendText}>Didn’t receive code? Resend Code</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.verifyButton} onPress={verifyOtp}>
            <Text style={styles.verifyButtonText}>Verify</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create(style);

export default OtpVerification;
