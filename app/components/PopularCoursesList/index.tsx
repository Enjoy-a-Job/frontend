import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {normalize} from '../../helper/responsiveScreen';
import colors from '../../assets/colors';
import {FontText} from '..';
import SvgIcons from '../../assets/svgIcons';
import styles from './style';

const PopularCoursesList = (props: any) => {
  const renderItem = ({item}: any) => (
    <View style={styles.renderView}>
      <View style={styles.iconView}>
        <item.icon />
      </View>
      <View style={styles.detailView}>
        <FontText
          name={'inter-semibold'}
          size={normalize(14)}
          style={styles.titleStyle}
          color={colors.black}>
          {item.title}
        </FontText>
        <View style={styles.LessonsView}>
          <SvgIcons.DocumentIcon />
          <FontText
            name={'inter-semibold'}
            size={normalize(12)}
            style={styles.LessonsText}
            color={colors.black}>
            {item.lessons}
          </FontText>
        </View>
        <View style={styles.LessonsView}>
          <SvgIcons.StarIcon />
          <FontText
            name={'inter-semibold'}
            size={normalize(12)}
            style={styles.reviewsText}
            color={colors.black}>
            {item.reviews}
          </FontText>
        </View>
        <View style={styles.priceView}>
          <View style={styles.flexRow}>
            <FontText
              name={'inter-semibold'}
              size={normalize(12)}
              pTop={normalize(5)}
              style={styles.priceText}
              color={colors.black}>
              {item.price}
            </FontText>
            {item?.oldPrice && (
              <FontText
                name={'inter-semibold'}
                size={normalize(10)}
                pTop={normalize(5)}
                style={styles.oldPriceText}
                color={colors.darkGray}>
                {item.oldPrice}
              </FontText>
            )}
          </View>
          <TouchableOpacity
            onPress={() => {
              props.Like(item);
            }}>
            {item?.like ? <SvgIcons.LikeIcon /> : <SvgIcons.DisLikeIcon />}
          </TouchableOpacity>
        </View>
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

export default PopularCoursesList;
