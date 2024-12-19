import React from 'react';
import { FlatList } from 'react-native';
import styles from './style';
import Item from './item';

const ProfileMenuList = (props: any) => {
  return (
    <FlatList
      data={props.data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <Item item={item} isBorderDisplayed={index === 2} />
      )}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}
    />
  );
};

export default ProfileMenuList;
