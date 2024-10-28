import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { appConstant } from '../../helper/appConstant';
import SvgIcons from '../../assets/svgIcons';
import s from './style';

const Search = ({navigation}: any) => {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `${appConstant.search}`,
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
      <Text>Search</Text>
    </View>
  );
};

export default Search;
