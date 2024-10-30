import React from 'react';
import {View, FlatList} from 'react-native';
import {normalize} from '../../helper/responsiveScreen';
import colors from '../../assets/colors';
import {FontText} from '..';
import styles from './style';

const CategoriesList = (props: any) => {
  const renderItem = ({item}: any) => (
    <View style={styles.renderView}>
      <View style={styles.iconView}>
        <item.icon />
      </View>
      <View style={styles.titleView}>
        <FontText
          name={'inter-semibold'}
          size={normalize(14)}
          pTop={normalize(20)}
          style={styles.title}
          color={colors.black}>
          {item.title}
        </FontText>
      </View>
    </View>
  );
  return (
    <FlatList
      data={props.data}
      horizontal
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default CategoriesList;
