import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {appConstant} from '../../helper/appConstant';
import SvgIcons from '../../assets/svgIcons';
import s from './style';

const Sms = ({navigation}: any) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `${appConstant.sms}`,
      headerTitleStyle: s.headerTitle,
      headerLeft: () => (
        <TouchableOpacity
          style={s.backIcon}
          onPress={() => navigation.goBack()}>
          <SvgIcons.BackIcon />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={s.container}>
      <Text>Sms</Text>
    </View>
  );
};

export default Sms;
