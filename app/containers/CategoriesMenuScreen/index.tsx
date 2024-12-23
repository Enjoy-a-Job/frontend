import { RouterProps } from '@/app/utils/commonInterface';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import style from './style';
import SvgIcons from '@/app/assets/svgIcons';
import CategoriesMenu from '@/app/components/CategoriesMenu';
import { normalize } from "@/app/helper/responsiveScreen";

const CategoriesMenuScreen = ({
  navigation,
  route
}: RouterProps): React.ReactElement => {
  const { t } = useTranslation();
  const { index }: any = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: t('category.menu.title'),
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
        <CategoriesMenu index={index} />
      </View>
    </View>
  );
};

export default CategoriesMenuScreen;
