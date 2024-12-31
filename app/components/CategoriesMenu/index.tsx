import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './style';
import { Button, FontText } from '..';
import { normalize } from '@/app/helper/responsiveScreen';
import colors from '@/app/assets/colors';
import Item from './item';
import { useTranslation } from 'react-i18next';
import { ALL_CATEGORIES_DATA } from '@/app/helper/constantData';
import { RouteName } from '@/app/helper/routeName';

const CategoriesMenu = (props: any) => {
  const { index, navigation } = props;
  const menuData = ALL_CATEGORIES_DATA();
  const { icon, title, menu } = menuData[index];
  const { t } = useTranslation();

  return (
    <View style={styles.renderView}>
      <View style={styles.iconPaddingView}>
        <View style={styles.iconView}>{icon({})}</View>
      </View>
      <View style={styles.transparentIconView} />
      <View style={styles.titleView}>
        <View style={styles.subTitleView}>
          <FontText
            size={normalize(20)}
            pTop={normalize(10)}
            style={styles.title}
            color={colors.black}
          >
            {title}
          </FontText>
          <View style={styles.flatListView}>
            <FlatList
              data={menu}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index: menuIndex }) => (
                <Item
                  item={item}
                  onPress={() =>
                    navigation.navigate(RouteName.categoriesMenuDetailsScreen, {
                      categoryIndex: index,
                      menuIndex
                    })
                  }
                />
              )}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.contentContainerStyle}
            />
          </View>
          <Button bgColor={colors.primary} style={styles.loginBtn}>
            <FontText
              name={'poppins-semibold'}
              size={normalize(13)}
              color={colors.white}
              pTop={normalize(7)}
              pBottom={normalize(7)}
              pLeft={normalize(20)}
              pRight={normalize(20)}
              textAlign='center'
            >
              {t('category.menu.button.title')}
            </FontText>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default CategoriesMenu;
