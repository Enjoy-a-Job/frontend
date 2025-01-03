import React from 'react';
import { FlatList } from 'react-native';
import styles from './style';
import Item from './item';
import { RouteName } from '@/app/helper/routeName';

const AllCategoriesList = (props: any) => {
  return (
    <FlatList
      data={props.data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <Item
          item={item}
          onPress={() => {
            props.navigation.navigate(RouteName.categoriesMenuScreen, {
              index
            });
          }}
        />
      )}
      showsVerticalScrollIndicator={false}
      numColumns={3}
      columnWrapperStyle={styles.columnWrapperStyle}
    />
  );
};

export default AllCategoriesList;
