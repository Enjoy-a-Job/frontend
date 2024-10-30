import { View, SafeAreaView, ScrollView } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import colors from '../../assets/colors';
import { normalize } from '../../helper/responsiveScreen';
import SvgIcons from '../../assets/svgIcons';
import { FontText } from '../../components';
import CategoriesList from '../../components/CategoriesList';
import PopularCoursesList from '../../components/PopularCoursesList';
import TreadingCoursesList from '../../components/TreadingCoursesList';
import styles from './style';
import {
  CATEGORIES_DATA,
  POPULAR_COURSES_DATA,
  TREADING_COURSES_DATA,
} from '../../helper/constantData';
import HeaderOfList from '../../components/HeaderOfList';
import SearchHome from '../../components/SearchHome';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  const [popularCourses, setPopularCourses] = useState<any>([]);
  const [treadingCourses, setTreadingCourses] = useState<any>([]);
  const [updateState, setUpdateState] = useState<boolean>(false);
  const categoriesData = CATEGORIES_DATA();
  const popularCoursesData = POPULAR_COURSES_DATA();
  const trendingCoursesData = TREADING_COURSES_DATA();

  useLayoutEffect(() => {
    setPopularCourses(popularCoursesData);
    setTreadingCourses(trendingCoursesData);
  }, []);

  //@ts-ignore
  const LikeUpdate = (item, data, update) => {
    let updateLike = data;
    // @ts-ignore
    updateLike?.map((i, index) => {
      if (i.title === item.title) {
        data[index].like = !item.like;
      }
    });
    update(updateLike);
    setUpdateState(!updateState);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.mainView} showsVerticalScrollIndicator={false}>
        <SearchHome />
        <View style={{}}>
          <HeaderOfList
            title={t('TopCategories')}
            rightText={t('SeeAll')}
          />
          <CategoriesList data={categoriesData} />
        </View>
        <View style={{ marginTop: normalize(10) }}>
          <HeaderOfList
            title={t('PopularCourses')}
            rightText={t('SeeAll')}
          />
          <PopularCoursesList
            data={popularCourses}
            Like={(item: any) => {
              LikeUpdate(item, popularCourses, (data: any) => {
                setPopularCourses(data);
              });
            }}
          />
        </View>
        <View style={{ marginTop: normalize(10) }}>
          <HeaderOfList
            title={t('TreadingCourses')}
            rightText={t('SeeAll')}
          />
          <TreadingCoursesList
            data={treadingCourses}
            Like={(item: any) => {
              LikeUpdate(item, treadingCourses, (data: any) => {
                setTreadingCourses(data);
              });
            }}
          />
        </View>
        <View style={styles.locationContainer}>
          <SvgIcons.Location />
          <FontText
            name={'inter-semibold'}
            size={normalize(16)}
            style={styles.loactionText}
            color={colors.black}>
            {t('locationHome')}
          </FontText>
          <SvgIcons.Map />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
