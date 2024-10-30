import { useTranslation } from 'react-i18next';
import SvgIcons from '../assets/svgIcons';

export const emailRegex = /\S+@\S+\.\S+/;

export const CATEGORIES_DATA = () => {
  const { t } = useTranslation();
  return [
    { title: t('graphicDesign'), icon: SvgIcons.CateIcon1 },
    { title: t('threeDDesign'), icon: SvgIcons.CateIcon2 },
    { title: t('artDesign'), icon: SvgIcons.CateIcon3 },
  ];
};

export const POPULAR_COURSES_DATA = () => {
  const { t } = useTranslation();
  return [
    {
      title: t('uiUxDesign'),
      icon: SvgIcons.Course1,
      lessons: `24 ${t('lessons')}`,
      reviews: '4.9 (27 ' + t('reviews') + ')',
      price: '$37.00',
    },
    {
      title: t('webDevelopment'),
      icon: SvgIcons.Course2,
      lessons: `33 ${t('lessons')}`,
      reviews: '4.9 (36 ' + t('reviews') + ')',
      price: '$50.00',
      oldPrice: '$60.00',
    },
    {
      title: t('artDesign'),
      icon: SvgIcons.Course1,
      lessons: `44 ${t('lessons')}`,
      reviews: '4.9 (48 ' + t('reviews') + ')',
      price: '$80.00',
      oldPrice: '$100.00',
    },
  ];
};

export const TREADING_COURSES_DATA = () => {
  const { t } = useTranslation();
  return [
    {
      title: t('learnFashionDesign'),
      icon: SvgIcons.Course1,
      lessons: `22 ${t('lessons')}`,
      reviews: '4.9 (27 ' + t('reviews') + ')',
      price: '$35.00',
      oldPrice: '$45.00',
    },
    {
      title: t('threeDDesignIllustration'),
      icon: SvgIcons.Course2,
      lessons: `30 ${t('lessons')}`,
      reviews: '4.9 (36 ' + t('reviews') + ')',
      price: '$40.00',
    },
  ];
};
