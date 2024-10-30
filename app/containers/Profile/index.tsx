import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import SvgIcons from '../../assets/svgIcons';
import s from './style';
import { useTranslation } from 'react-i18next';

const Profile = ({navigation}: any) => {
  const { t } = useTranslation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: t('profile'),
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
      <Text>{t('profile')}</Text>
    </View>
  );
};

export default Profile;
