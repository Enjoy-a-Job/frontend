import React from 'react';
import {TouchableOpacity, StyleSheet, Keyboard} from 'react-native';
import { wp } from '../../helper/responsiveScreen';

const Button = (props: any) => {
  const {
    children,
    style,
    buttonStyle,
    activeOpacity = 0.5,
    bgColor = 'tintColor',
    disabled = false,
    buttonHeight = wp(55),
  } = props;

  function onButtonPress(prop: any) {
    return (evt: any) => {
      const {onPress, dismissKeyboardOnPress} = prop;

      dismissKeyboardOnPress && Keyboard.dismiss();
      if (onPress) {
        onPress(evt);
      }
    };
  }

  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      onPress={onButtonPress(props)}
      disabled={disabled}
      style={[
        styles.button,
        buttonStyle,
        bgColor ? {backgroundColor: bgColor} : null,
        buttonHeight ? {height: buttonHeight} : null,
        style,
      ]}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingLeft: 5,
    paddingRight: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
  },
  shadow: {
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.5,
    elevation: 10,
    shadowRadius: 10,
  },
});

export default Button;
