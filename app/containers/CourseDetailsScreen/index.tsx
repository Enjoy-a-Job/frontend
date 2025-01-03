import { RouterProps } from '@/app/utils/commonInterface';
import React from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import style from './style';
import SvgIcons from '@/app/assets/svgIcons';
import { normalize } from '@/app/helper/responsiveScreen';
import FontText from '@/app/components/FontText';
import { COURSE_DETAILS_DATA } from '@/app/helper/constantData';
import CourseDetails from '@/app/components/CourseDetails';
import HourSection from '@/app/components/HourSection';
import AllCategoriesList from '@/app/components/AllCategoriesList';
import { Button } from '@/app/components';
import colors from '@/app/assets/colors';

const CourseDetailsScreen = ({
  navigation,
  route
}: RouterProps): React.ReactElement => {
  const { t } = useTranslation();
  const course = COURSE_DETAILS_DATA();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: t('category.Handyman'),
      headerTitleStyle: style.headerTitle,
      headerStatusBarHeight: normalize(20),
      headerLeft: () => (
        <TouchableOpacity
          style={style.backIcon}
          onPress={() => navigation.goBack()}
        >
          <SvgIcons.BackIcon />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={style.heartIcon}
          onPress={() => navigation.goBack()}
        >
          <SvgIcons.Heart />
        </TouchableOpacity>
      )
    });
  }, [navigation]);

  return (
    <View style={style.container}>
      <View style={style.subContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={style.scrollView}
          nestedScrollEnabled={true}
        >
          <View style={style.profileView}>
            <View style={style.profileFirstView}>
              <course.image height={normalize(60)} width={normalize(60)} />
              <View style={style.profileSecondView}>
                <FontText style={style.name} size={normalize(20)}>
                  {course.name}
                </FontText>
                <FontText style={style.tag} size={normalize(12)}>
                  {course.numberOfService} {course.tag}
                </FontText>
              </View>
            </View>
            <View style={style.profileLastView}>
              <course.ratingIcon />
              <View style={style.ratingView}>
                <FontText style={style.rating} size={normalize(14)}>
                  {course.rating}{' '}
                </FontText>
                <FontText style={style.rating} size={normalize(14)}>
                  ({course.numberOfRating})
                </FontText>
              </View>
            </View>
          </View>
          <View style={style.aboutView}>
            <FontText style={style.about} size={normalize(16)}>
              {course.aboutMe}
            </FontText>
            <FontText style={style.description} size={normalize(14)}>
              {course.description}
            </FontText>
          </View>
          <View>
            <CourseDetails data={course.courseImage} scrollEnabled={false} />
          </View>
          <View style={style.hour}>
            <HourSection
              amount={course.amount}
              hora={course.hour}
              rightTitle={course.availability}
            />
          </View>
          <View style={style.suggestion}>
            <AllCategoriesList
              data={course.suggestCourse}
              navigation={navigation}
            />
          </View>
        </ScrollView>
        <View style={style.bottomView}>
          <Button bgColor={colors.primary} style={style.loginBtn}>
            <FontText
              name={'poppins-semibold'}
              size={normalize(16)}
              color={colors.white}
              pTop={normalize(7)}
              pBottom={normalize(7)}
              pLeft={normalize(20)}
              pRight={normalize(20)}
              textAlign='center'
            >
              {t('course_details.proposal')}
            </FontText>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default CourseDetailsScreen;
