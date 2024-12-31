import { View } from 'react-native';
import React from 'react';
import styles from './style';
import { CategoriesDetailsMenu } from '@/app/utils/commonInterface';
import { FontText } from '..';
import { normalize } from '@/app/helper/responsiveScreen';
import { useTranslation } from 'react-i18next';
import StarRating from './StarRating';

interface Props {
  item: CategoriesDetailsMenu;
  onPress?: () => void;
}

const Item: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation();
  const { item } = props;
  return (
    <View style={styles.renderView}>
      <View style={styles.subRenderView}>
        <View style={styles.inRenderView}>
          <View style={styles.iconView}>
            <item.picture />
          </View>
          <View style={styles.nameView}>
            <FontText style={styles.name} size={normalize(14)}>
              {item.name}
            </FontText>
            <View style={styles.ratingView}>
              <StarRating rating={item.rating} />
              <FontText style={styles.amount} size={normalize(12)}>
                {item.rate}
                {t('category.menu.details.PerHour')}
              </FontText>
            </View>
          </View>
        </View>
        <FontText style={styles.review} size={normalize(14)}>
          {item.review}
        </FontText>
      </View>
    </View>
  );
};

export default Item;
