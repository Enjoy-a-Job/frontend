import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import SvgIcons from '../../assets/svgIcons';
import s from './style';

const Eduction = ({ navigation }: any) => {

  React.useLayoutEffect(() => {
    navigation.setOptions({
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
      <Text>Eduction</Text>
    </View>
  );
};

export default Eduction;
