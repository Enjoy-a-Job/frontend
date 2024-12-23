import React from 'react';
import { FlatList } from 'react-native';
import Item from "./item";

const CategoriesMenuDetails = (props: any) => {
  return (
    <FlatList
      data={props.data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <Item item={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CategoriesMenuDetails;
