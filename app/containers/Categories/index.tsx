import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import style from './style';
import { useTranslation } from 'react-i18next';
import { RouterProps } from '@/app/utils/commonInterface';
import SvgIcons from '@/app/assets/svgIcons';
import { ALL_CATEGORIES_DATA } from "@/app/helper/constantData";
import AllCategoriesList from "@/app/components/AllCategoriesList";

const Categories = ({ navigation }: RouterProps): React.ReactElement => {
  const { t } = useTranslation();

  const allCategoriesData = ALL_CATEGORIES_DATA();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: t('category.Title'),
      headerTitleStyle: style.headerTitle,
      headerLeft: () => (
        <TouchableOpacity
          style={style.backIcon}
          onPress={() => navigation.goBack()}
        >
          <SvgIcons.BackIcon />
        </TouchableOpacity>
      )
    });
  }, [navigation]);

  return (
    <View style={style.container}>
      <View style={style.subContainer}>
        <AllCategoriesList data={allCategoriesData} />
      </View>
    </View>
  );
};

export default Categories;
