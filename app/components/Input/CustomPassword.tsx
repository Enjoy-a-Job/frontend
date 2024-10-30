import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import SvgIcons from '../../assets/svgIcons';
import colors from '../../assets/colors';
import { hp, normalize, wp } from '../../helper/responsiveScreen';
import { FontText } from '../../components';
import Input from '../Input';

interface Props {
  title?: string;
  value: string;
  handleChange: (name: string) => void;
  handleBlur: (name: string) => void;
  placeHolder?: string;
  name: string;
  error?: string;
  viewStyle?: Record<string, any>;
}

const CustomPassword: React.FC<Props> = (props: Props) => {
  const {
    title,
    placeHolder,
    handleChange,
    handleBlur,
    value,
    name,
    error,
    viewStyle = {},
  } = props;
  const [focus, setFocus] = React.useState<boolean>(false);
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  return (
    <View style={[{
      width: wp(90),
      alignSelf: 'center',
    }, viewStyle]}>
    <Input
      blurOnSubmit
      color="blue"
      fontName="poppins-medium"
      fontSize={normalize(14)}
      inputStyle={{
        color: colors.black,
        padding: 0,
      }}
      keyboardType="default"
      placeholder={placeHolder}
      placeholderTextColor={colors.gray}
      returnKeyType="done"
      rightIcon={
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={{
            padding: wp(3.5),
            left: wp(2.5),
          }}>
          {showPassword === false ? (
            <SvgIcons.HideIcon />
          ) : (
            <SvgIcons.ShowIcon />
          )}
        </TouchableOpacity>
      }
      secureTextEntry={showPassword === false ? true : false}
      style={{
        borderColor:
          focus
            ? colors.primary
            : colors.grayBorderColor,
        height: hp(6),
      }}
      title={title}
      titlecolor={colors.black}
      titleSize={normalize(14)}
      value={value}
      withRightIcon
      withTitle={title !== ''}
      onBlur={() => {
        handleBlur(name);
        setFocus(false);
      }}
      onChangeText={handleChange(name)}
      onFocus={() => setFocus(true)}
    />
    <FontText color={colors.red} size={normalize(12)} pLeft={wp(2)}>
      {error || ''}
    </FontText>
  </View>
  );
};

export default CustomPassword;