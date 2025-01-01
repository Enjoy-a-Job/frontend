import React from 'react';
import { FlatList } from 'react-native';
import Item from './item';
import { RouteName } from '@/app/helper/routeName';

const CategoriesMenuDetails = (props: any) => {
  return (
    <FlatList
      data={props.data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <Item
          item={item}
          onPress={() =>
            props.navigation.navigate(RouteName.courseDetailsScreen)
          }
        />
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CategoriesMenuDetails;
