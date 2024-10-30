import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import SvgIcons from '../../assets/svgIcons';
import s from './style';
import { useTranslation } from 'react-i18next';

const Search = ({navigation}: any) => {
  const { t } = useTranslation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: t('search'),
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
      <Text>{t('search')}</Text>
    </View>
  );
};

export default Search;
