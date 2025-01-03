import React from 'react';
import { FlatList } from 'react-native';
import Item from './item';

const CourseDetails = (props: any) => {
  return (
    <FlatList
      data={props.data}
      horizontal
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <Item item={item} />}
      showsHorizontalScrollIndicator={false}
      scrollEnabled={props.scrollEnabled}
    />
  );
};

export default CourseDetails;
