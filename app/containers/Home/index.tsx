import { View, SafeAreaView, ScrollView } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import colors from '../../assets/colors';
import { normalize } from '../../helper/responsiveScreen';
import SvgIcons from '../../assets/svgIcons';
import { appConstant } from '../../helper/appConstant';
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

const Home = () => {
  const [popularCourses, setPopularCourses] = useState<any>([]);
  const [treadingCourses, setTreadingCourses] = useState<any>([]);
  const [updateState, setUpdateState] = useState<boolean>(false);

  useLayoutEffect(() => {
    setPopularCourses(POPULAR_COURSES_DATA);
    setTreadingCourses(TREADING_COURSES_DATA);
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
            title={appConstant.TopCategories}
            rightText={appConstant.SeeAll}
          />
          <CategoriesList data={CATEGORIES_DATA} />
        </View>
        <View style={{ marginTop: normalize(10) }}>
          <HeaderOfList
            title={appConstant.PopularCourses}
            rightText={appConstant.SeeAll}
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
            title={appConstant.TreadingCourses}
            rightText={appConstant.SeeAll}
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
            {appConstant.locationHome}
          </FontText>
          <SvgIcons.Map />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
