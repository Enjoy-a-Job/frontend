import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import SvgIcons from '../../assets/svgIcons';
import s from './style';
import { useTranslation } from 'react-i18next';

const Inbox = ({navigation}: any) => {
  const { t } = useTranslation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: t('inbox'),
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
      <Text>{t('inbox')}</Text>
    </View>
  );
};

export default Inbox;
