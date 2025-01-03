import React from 'react';
import { FlatList } from 'react-native';
import Item from './item';
import { RouteName } from '@/app/helper/routeName';

const InboxList = (props: any) => {
  return (
    <FlatList
      data={props.data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <Item
          item={item}
          onPress={() =>
            props.navigation.navigate(RouteName.chatScreen, {
              index
            })
          }
        />
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default InboxList;
