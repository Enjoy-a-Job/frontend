import SvgIcons from '../assets/svgIcons';

export const emailRegex = /\S+@\S+\.\S+/;

export const CATEGORIES_DATA = [
  {title: 'Graphic Design', icon: SvgIcons.CateIcon1},
  {title: '3D Design', icon: SvgIcons.CateIcon2},
  {title: 'Art Design', icon: SvgIcons.CateIcon3},
];

export const POPULAR_COURSES_DATA = [
  {
    title: 'UI UX Design',
    icon: SvgIcons.Course1,
    lessons: '24 Lessons',
    reviews: '4.9 (27 reviews)',
    price: '$37.00',
  },
  {
    title: 'Web Development',
    icon: SvgIcons.Course2,
    lessons: '33 Lessons',
    reviews: '4.9 (36 reviews)',
    price: '$50.00',
    oldPrice: '$60.00',
  },
  {
    title: 'Art Design',
    icon: SvgIcons.Course1,
    lessons: '44 Lessons',
    reviews: '4.9 (48 reviews)',
    price: '$80.00',
    oldPrice: '$100.00',
  },
];

export const TREADING_COURSES_DATA = [
  {
    title: 'Learn Fashion design',
    icon: SvgIcons.Course1,
    lessons: '22 Lessons',
    reviews: '4.9 (27 reviews)',
    price: '$35.00',
    oldPrice: '$45.00',
  },
  {
    title: '3D Design Illustration',
    icon: SvgIcons.Course2,
    lessons: '30 Lessons',
    reviews: '4.9 (36 reviews)',
    price: '$40.00',
  },
];
