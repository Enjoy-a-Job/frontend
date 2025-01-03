import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import s from './style';
import { useTranslation } from 'react-i18next';
import InboxList from "@/app/components/InboxList";
import { CHAT_INBOX } from "@/app/helper/constantData";
import SvgIcons from '@/app/assets/svgIcons';

const Inbox = ({navigation}: any) => {
  const { t } = useTranslation();
  const chat = CHAT_INBOX();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: t('inbox'),
      headerTitleStyle: s.headerTitle,
      headerLeft: () => (
        <TouchableOpacity
          style={s.backIcon}
          onPress={() => navigation.goBack()}
        >
          <SvgIcons.BackIcon />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={s.searchIcon}
          onPress={() => navigation.goBack()}
        >
          <SvgIcons.Search />
        </TouchableOpacity>
      )
    });
  }, [navigation]);

  return (
    <View style={s.container}>
      <View style={s.subContainer}>
        <View style={s.view}>
          <InboxList data={chat} navigation={navigation} />
        </View>
      </View>
    </View>
  );
};

export default Inbox;
