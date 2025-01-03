import React from 'react';
import {View, TouchableOpacity, TextInput} from 'react-native';
import styles from './style';
import { useTranslation } from 'react-i18next';
import { normalize } from "@/app/helper/responsiveScreen";
import SvgIcons from '@/app/assets/svgIcons';

const ChatInput = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.searchView}>
      <TextInput
        style={{ flex: 1, marginLeft: normalize(10) }}
        placeholder={t('chat.message')}
      />
      <TouchableOpacity style={styles.filterView}>
        <SvgIcons.Send width={normalize(40)} height={normalize(40)} />
      </TouchableOpacity>
    </View>
  );
};

export default ChatInput;
