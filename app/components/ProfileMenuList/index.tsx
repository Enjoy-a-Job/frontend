import React from 'react';
import { View, FlatList, TouchableOpacity, Text } from "react-native";
import {normalize} from '../../helper/responsiveScreen';
import colors from '../../assets/colors';
import {FontText} from '..';
import SvgIcons from '../../assets/svgIcons';
import styles from './style';

const ProfileMenuList = (props: any) => {
  const renderItem = ({ item, index }: any) => (
    <View>
      {index === 2 && (
        <View
          style={{
            borderBottomColor:colors.borderColor,
            borderBottomWidth: 1
          }}
        />
      )}
      <TouchableOpacity style={styles.renderView}>
        <View style={styles.subView}>
          <View style={styles.iconView}>
            <item.icon />
          </View>
          <FontText
            size={normalize(16)}
            style={styles.titleStyle}
            color={colors.black}
          >
            {item.title}
          </FontText>
        </View>
        <View style={styles.iconView}>
          <SvgIcons.LeftIcon />
        </View>
      </TouchableOpacity>
    </View>
  );
  return (
    <FlatList
      data={props.data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}
    />
  );
};

export default ProfileMenuList;
