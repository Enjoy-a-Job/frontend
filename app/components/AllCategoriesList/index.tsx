import React from 'react';
import { FlatList } from 'react-native';
import styles from './style';
import Item from './item';

const AllCategoriesList = (props: any) => {
  return (
    <FlatList
      data={props.data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <Item item={item} />}
      showsVerticalScrollIndicator={false}
      numColumns={3}
      columnWrapperStyle={styles.columnWrapperStyle}
    />
  );
};

export default AllCategoriesList;
