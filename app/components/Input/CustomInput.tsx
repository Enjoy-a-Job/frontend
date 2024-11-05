import React from 'react';
import { View } from 'react-native';

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
  dataDetectorType?: 'phoneNumber' | 'email' | 'url' | 'none' | undefined,
}

const CustomInput: React.FC<Props> = (props: Props) => {
  const {
    title,
    placeHolder,
    handleChange,
    handleBlur,
    value,
    name,
    error,
    viewStyle = {},
    dataDetectorType,
  } = props;
  const [focus, setFocus] = React.useState<boolean>(false);

  return (
    <View style={[{
      width: wp(90),
      alignSelf: 'center',
    }, viewStyle]}>
    <Input
      autoCapitalize="none"
      color="blue"
      fontName="inter-medium"
      fontSize={normalize(14)}
      inputStyle={{
        color: colors.black,
        padding: 0,
      }}
      keyboardType="default"
      placeholder={placeHolder}
      placeholderTextColor={colors.gray}
      returnKeyType="next"
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
      withTitle={title !== ''}
      onBlur={() => {
        handleBlur(name);
        setFocus(false);
      }}
      onChangeText={handleChange(name)}
      onFocus={() => setFocus(true)}
      dataDetectorType={dataDetectorType}
    />
    <FontText color={colors.red} size={normalize(12)} pLeft={wp(2)}>
      {error || ''}
    </FontText>
  </View>
  );
};

export default CustomInput;