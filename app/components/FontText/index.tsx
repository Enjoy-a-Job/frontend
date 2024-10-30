import React from 'react';
import {Text} from 'react-native';
import colors from '../../assets/colors';
import fonts from '../../assets/fonts';
import { normalize } from '../../helper/responsiveScreen';

const FontText = ({
  children,
  style,
  color,
  pureColor,
  size = normalize(14),
  name = 'default',
  lineHeightFactor = 1.2,
  lines = 0,
  opacity = 1,
  pTop = 0,
  pLeft = 0,
  pRight = 0,
  pBottom = 0,
  textAlign = 'left',
  textDecoration = null,
  onLayout,
  ellipsizeMode,
}: any) => {
  const fontSize = size;
  const fontName : any = fonts;
  const textColor : any = colors;
  const textStyle = {
    fontSize,
    fontFamily: fontName[name],
    color: pureColor || color,
    lineHeight: fontSize * lineHeightFactor,
    opacity,
    paddingTop: pTop,
    paddingLeft: pLeft,
    paddingRight: pRight,
    paddingBottom: pBottom,
    textAlign,
    textDecorationLine: textDecoration,
    textDecorationColor: textDecoration ? pureColor || textColor[color] : null,
    textDecorationStyle: textDecoration ? 'solid' : null,
  };
  return (
    <Text
      allowFontScaling={false}
      numberOfLines={lines}
      onLayout={onLayout}
      ellipsizeMode={ellipsizeMode}
      style={[textStyle, style]}>
      {children}
    </Text>
  );
};

export default FontText;

