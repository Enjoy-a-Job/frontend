import { RouterProps } from '@/app/utils/commonInterface';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import style from './style';
import SvgIcons from '@/app/assets/svgIcons';
import { normalize } from '@/app/helper/responsiveScreen';
import { FontText } from '@/app/components';
import { ALL_CATEGORIES_DATA } from '@/app/helper/constantData';
import CategoriesMenuDetails from "@/app/components/CategoriesMenuDetails";

const CategoriesMenuDetailsScreen = ({
  navigation,
  route
}: RouterProps): React.ReactElement => {
  const { t } = useTranslation();
  const { categoryIndex, menuIndex }: any = route.params;
  const menuDetailsData = ALL_CATEGORIES_DATA();
  const { menu } = menuDetailsData[categoryIndex];
  const { title, icon, data } = menu[menuIndex];

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: title,
      headerTitleStyle: style.headerTitle,
      headerStatusBarHeight: normalize(20),
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
        <View style={style.iconView}>
          {icon({ width: '100%'})}
        </View>
        <FontText size={normalize(16)} style={style.title} pLeft={normalize(2)}>
          {t('category.menu.details.Professionals')}
        </FontText>
        <CategoriesMenuDetails data={data} />
      </View>
    </View>
  );
};

export default CategoriesMenuDetailsScreen;
