import React from 'react';
import { FlatList } from 'react-native';
import Item from './item';

const ChatList = (props: any) => {
  return (
    <FlatList
      data={props.data}
      renderItem={({ item }) => <Item item={item} status={props.status} />}
      keyExtractor={(item) => item.id.toString()}
      inverted
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ChatList;
