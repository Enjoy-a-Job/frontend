import React, {
  createRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import FontText from '../FontText';
import { hp, normalize, wp } from '../../helper/responsiveScreen';
import colors from '../../assets/colors';

const Input = forwardRef(
  (
    {
      value,
      editable,
      titlecolor,
      placeholder,
      placeholderTextColor,
      blurOnSubmit,
      returnKeyType,
      multiline,
      keyboardType,
      autoCapitalize,
      maxLength,
      secureTextEntry,
      inputStyle,
      children,
      style,
      onFocus,
      onBlur,
      autoFocus,
      textAlign,
      caretHidden,
      contextMenuHidden,
      selectTextOnFocus,
      pointerEvents,
      onSubmit,
      clearOnSubmit,
      onChangeText,
      onEndEditing,
      onKeyPress,
      autoCorrect,
      withTitle,
      title,
      titleSize,
      withLeftIcon,
      leftIcon,
      fontStyle,
      isRequired,
      pTop,
      withRightIcon,
      rightIcon,
    } : any,
    ref,
  ) => {
    const [inputValue, setValue] = useState(value);
    let inputRef: any = createRef();

    const onChangeTextHandler = (text: any) => {
      setValue(text);
      if (typeof onChangeText === 'function') {
        onChangeText(text);
      }
    };

    const onSubmitEditingHandler = () => {
      if (typeof onSubmit === 'function') {
        onSubmit(inputValue);
      }
      if (clearOnSubmit) {
        setValue('');
      }
    };

    useImperativeHandle(ref, () => ({
      focus: () => inputRef.focus(),
      blur: () => inputRef.blur(),
    }));

    return (
      <View>
        {withTitle && (
          <FontText
            name={'poppins-medium'}
            size={titleSize}
            color={titlecolor}
            pTop={pTop}
            pBottom={hp(1)}
            pLeft={wp(2)}
            style={fontStyle}>
            {title}
            {isRequired && (
              <FontText
                name={'default'}
                size={normalize(15)}
                color={'red'}
                pBottom={hp(0.9)}
                style={fontStyle}>
                {'*'}
              </FontText>
            )}
          </FontText>
        )}
        <View style={[styles.wrapper, style]}>
          {withLeftIcon ? leftIcon : null}
          <TextInput
            ref={el => {
              inputRef = el;
            }}
            textContentType="none"
            pointerEvents={pointerEvents}
            editable={editable}
            value={value}
            textAlign={textAlign}
            autoComplete="off"
            autoCorrect={!!(autoCorrect && autoCorrect === true)}
            allowFontScaling={false}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            onChangeText={onChangeTextHandler}
            onSubmitEditing={onSubmitEditingHandler}
            blurOnSubmit={multiline ? false : blurOnSubmit}
            returnKeyType={returnKeyType}
            multiline={multiline}
            underlineColorAndroid="transparent"
            keyboardType={keyboardType}
            maxLength={maxLength}
            autoCapitalize={autoCapitalize}
            secureTextEntry={secureTextEntry}
            onFocus={onFocus}
            onBlur={onBlur}
            onEndEditing={onEndEditing}
            autoFocus={autoFocus}
            caretHidden={caretHidden}
            contextMenuHidden={contextMenuHidden}
            selectTextOnFocus={selectTextOnFocus}
            onKeyPress={onKeyPress}
            style={[
              multiline ? styles.inputMultiline : null,
              styles.input,
              inputStyle,
            ]}
          />
          {withRightIcon ? rightIcon : null}
          {children}
        </View>
      </View>
    );
  },
);

Input.defaultProps = {
  height: 46,
  fontSize: normalize(14),
  fontName: 'poppins-regular',
  color: 'black',
  placeholder: 'Type something...',
  placeholderTextColor: colors.black,
  defaultValue: '',
  clearOnSubmit: false,
  blurOnSubmit: false,
  returnKeyType: 'default',
  multiline: false,
  multilineHeight: hp(10),
  autoCapitalize: null,
  editable: true,
  keyboardType: 'default',
  maxLength: null,
  secureTextEntry: false,
  onFocus: null,
  onBlur: null,
  autoFocus: false,
  textAlign: null,
  onChangeText: null,
  caretHidden: false,
  contextMenuHidden: false,
  selectTextOnFocus: false,
  willCheckPosition: true,
  withTitle: false,
  titleSize: normalize(16),
  withLeftIcon: false,
  withRightIcon: false,
  isRequired: false,
  pTop: wp(6),
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    paddingLeft: 0,
    paddingRight: 10,
    paddingBottom: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  inputMultiline: {
    textAlignVertical: 'top',
  },
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: wp(3),
    paddingHorizontal: wp(3.5),
    borderWidth: wp(0.2),
    justifyContent: 'space-between',
  },
});

export default Input;
