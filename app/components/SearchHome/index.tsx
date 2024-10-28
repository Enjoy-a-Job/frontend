import React from 'react';
import {View, TouchableOpacity, TextInput} from 'react-native';
import {normalize} from '../../helper/responsiveScreen';
import colors from '../../assets/colors';
import styles from './style';
import SvgIcons from '../../assets/svgIcons';
import {appConstant} from '../../helper/appConstant';

const SearchHome = () => {
  return (
    <View style={styles.searchView}>
      <SvgIcons.SearchIcon fill={colors.darkGray} />
      <TextInput
        style={{flex: 1, marginLeft: normalize(10)}}
        placeholder={appConstant.searchHome}
      />
      <TouchableOpacity style={styles.filterView}>
        <SvgIcons.FilterIcon width={normalize(50)} height={normalize(50)} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchHome;
