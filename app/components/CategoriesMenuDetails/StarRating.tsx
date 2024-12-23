import React from 'react';
import { View } from 'react-native';
import SvgIcons from '@/app/assets/svgIcons';

interface StarRatingProps {
  rating: number;
}
const StarRating = ({ rating }: StarRatingProps) => {
  const totalStars = 5;
  const starStyle = { marginHorizontal: 1 };
  const stars = Array.from({ length: totalStars }, (_, index) => (
    <View key={index} style={starStyle}>
      {index < rating ? <SvgIcons.Star /> : <SvgIcons.EmptyStar />}
    </View>
  ));

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>{stars}</View>
  );
};

export default StarRating;
