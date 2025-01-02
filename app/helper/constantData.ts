import { useTranslation } from 'react-i18next';
import SvgIcons from '../assets/svgIcons';
import { number } from 'yup';

export const emailRegex = /\S+@\S+\.\S+/;

export const CATEGORIES_DATA = () => {
  const { t } = useTranslation();
  return [
    { title: t('graphicDesign'), icon: SvgIcons.CateIcon1 },
    { title: t('threeDDesign'), icon: SvgIcons.CateIcon2 },
    { title: t('artDesign'), icon: SvgIcons.CateIcon3 }
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
      price: '$37.00'
    },
    {
      title: t('webDevelopment'),
      icon: SvgIcons.Course2,
      lessons: `33 ${t('lessons')}`,
      reviews: '4.9 (36 ' + t('reviews') + ')',
      price: '$50.00',
      oldPrice: '$60.00'
    },
    {
      title: t('artDesign'),
      icon: SvgIcons.Course1,
      lessons: `44 ${t('lessons')}`,
      reviews: '4.9 (48 ' + t('reviews') + ')',
      price: '$80.00',
      oldPrice: '$100.00'
    }
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
      oldPrice: '$45.00'
    },
    {
      title: t('threeDDesignIllustration'),
      icon: SvgIcons.Course2,
      lessons: `30 ${t('lessons')}`,
      reviews: '4.9 (36 ' + t('reviews') + ')',
      price: '$40.00'
    }
  ];
};

export const PROFILE_MENU_DATA = () => {
  const { t } = useTranslation();
  return [
    {
      title: t('profile.CompletedWork'),
      icon: SvgIcons.ProfileCompletedWork
    },
    {
      title: t('profile.ContractedWork'),
      icon: SvgIcons.ProfileContractedWork
    },
    {
      title: t('profile.EditProfile'),
      icon: SvgIcons.ProfileEditProfile
    },
    {
      title: t('profile.Notifications'),
      icon: SvgIcons.ProfileNotifications
    },
    {
      title: t('profile.Purse'),
      icon: SvgIcons.ProfilePurse
    },
    {
      title: t('profile.Locations'),
      icon: SvgIcons.ProfileLocations
    },
    {
      title: t('profile.PrivacyPolicy'),
      icon: SvgIcons.ProfilePrivacyPolicy
    },
    {
      title: t('profile.WhoWeAre'),
      icon: SvgIcons.ProfileWhoWeAre
    },
    {
      title: t('profile.Logout'),
      icon: SvgIcons.ProfileLogout
    }
  ];
};

export const ALL_CATEGORIES_DATA = () => {
  const { t } = useTranslation();
  return [
    {
      title: t('category.Handyman'),
      icon: SvgIcons.CategoryHandyman,
      menu: CATEGORIES_MENU()
    },
    {
      title: t('category.Care'),
      icon: SvgIcons.CategoryCare,
      menu: CATEGORIES_MENU()
    },
    {
      title: t('category.Beauty'),
      icon: SvgIcons.CategoryBeautyBeauty,
      menu: CATEGORIES_MENU()
    },
    {
      title: t('category.ClothingFootwear'),
      icon: SvgIcons.CategoryClothingFootwear,
      menu: CATEGORIES_MENU()
    },
    {
      title: t('category.Sports'),
      icon: SvgIcons.CategorySports,
      menu: CATEGORIES_MENU()
    },
    {
      title: t('category.Classes'),
      icon: SvgIcons.CategoryClasses,
      menu: CATEGORIES_MENU()
    },
    {
      title: t('category.Pets'),
      icon: SvgIcons.CategoryPets,
      menu: CATEGORIES_MENU()
    },
    {
      title: t('category.Mechanics'),
      icon: SvgIcons.CategoryMechanics,
      menu: CATEGORIES_MENU()
    },
    {
      title: t('category.Transportation'),
      icon: SvgIcons.CategoryTransportation,
      menu: CATEGORIES_MENU()
    },
    {
      title: t('category.Audiovisual'),
      icon: SvgIcons.CategoryAudiovisual,
      menu: CATEGORIES_MENU()
    },
    {
      title: t('category.TouristGuide'),
      icon: SvgIcons.CategoryTourGuide,
      menu: CATEGORIES_MENU()
    },
    {
      title: t('category.Adviser'),
      icon: SvgIcons.CategoryConsulting,
      menu: CATEGORIES_MENU()
    },
    {
      title: t('category.Home'),
      icon: SvgIcons.CategoryHome,
      menu: CATEGORIES_MENU()
    }
  ];
};

export const CATEGORIES_MENU = () => {
  const { t } = useTranslation();
  return [
    {
      title: t('category.menu.DIY'),
      icon: SvgIcons.CategoryMenuDetails,
      data: CATEGORIES_MENU_DETAILS()
    },
    {
      title: t('category.menu.Electricity'),
      icon: SvgIcons.CategoryMenuDetails,
      data: CATEGORIES_MENU_DETAILS()
    },
    {
      title: t('category.menu.Masonry'),
      icon: SvgIcons.CategoryMenuDetails,
      data: CATEGORIES_MENU_DETAILS()
    },
    {
      title: t('category.menu.Arrangements'),
      icon: SvgIcons.CategoryMenuDetails,
      data: CATEGORIES_MENU_DETAILS()
    },
    {
      title: t('category.menu.Plumbing'),
      icon: SvgIcons.CategoryMenuDetails,
      data: CATEGORIES_MENU_DETAILS()
    },
    {
      title: t('category.menu.Paint'),
      icon: SvgIcons.CategoryMenuDetails,
      data: CATEGORIES_MENU_DETAILS()
    },
    {
      title: t('category.menu.Mounting'),
      icon: SvgIcons.CategoryMenuDetails,
      data: CATEGORIES_MENU_DETAILS()
    },
    {
      title: t('category.menu.Gardening'),
      icon: SvgIcons.CategoryMenuDetails,
      data: CATEGORIES_MENU_DETAILS()
    },
    {
      title: t('category.menu.Locksmith'),
      icon: SvgIcons.CategoryMenuDetails,
      data: CATEGORIES_MENU_DETAILS()
    }
  ];
};

export const CATEGORIES_MENU_DETAILS = () => {
  const { t } = useTranslation();
  return [
    {
      name: 'Javier Sanchez Ostiz',
      review: t('category.menu.details.review'),
      rate: 20,
      rating: 4,
      picture: SvgIcons.Javier
    },
    {
      name: 'Benita Wilson',
      review: t('category.menu.details.review'),
      rate: 30,
      rating: 3,
      picture: SvgIcons.Benita
    },
    {
      name: 'Ralph Edwards',
      review: t('category.menu.details.review'),
      rate: 20,
      rating: 4,
      picture: SvgIcons.Ralph
    },
    {
      name: 'Ralph Edwards',
      review: t('category.menu.details.review'),
      rate: 20,
      rating: 4,
      picture: SvgIcons.Ralph
    }
  ];
};

export const COURSE_DETAILS_DATA = () => {
  const { t } = useTranslation();
  return {
    name: t('course_details.name'),
    tag: t('course_details.tag'),
    aboutMe: t('course_details.aboutMe'),
    description: t('course_details.description'),
    hour: t('course_details.hour'),
    availability: t('course_details.availability'),
    proposal: t('course_details.proposal'),
    image: SvgIcons.ProfileIcon,
    numberOfService: 56,
    numberOfRating: 27,
    rating: 4.9,
    amount: 11,
    ratingIcon: SvgIcons.StarWithBackGround,
    courseImage: [
      {
        icon: SvgIcons.Course1
      },
      {
        icon: SvgIcons.Course2
      },
      {
        icon: SvgIcons.Course1
      }
    ],
    suggestCourse: [
      {
        title: t('category.Handyman'),
        icon: SvgIcons.CategoryHandyman
      },
      {
        title: t('category.Sports'),
        icon: SvgIcons.CategorySports
      },
      {
        title: t('category.Classes'),
        icon: SvgIcons.CategoryClasses
      }
    ]
  };
};

export const CHAT_INBOX = () => {
  const { t } = useTranslation();
  return [
    {
      name: t('chat.name'),
      status: t('chat.status'),
      message: t('chat.message'),
      time: t('chat.time'),
      recentMessage: t('chat.recentMessage'),
      icon: SvgIcons.ChatIcon,
      chat: CHAT_MESSAGES()
    },
    {
      name: t('chat.name'),
      status: t('chat.statusOffline'),
      message: t('chat.message'),
      time: t('chat.time'),
      recentMessage: t('chat.recentMessage'),
      icon: SvgIcons.ChatIcon,
      chat: CHAT_MESSAGES()
    }
  ];
};

export const CHAT_MESSAGES = () => {
  const { t } = useTranslation();
  return [
    {
      id: 1,
      text: '',
      sender: t('chat.bot'),
      time: '',
      isTyping: true
    },
    {
      id: 2,
      text: t('chat.text1'),
      sender: t('chat.user'),
      time: '09:27 am',
      isTyping: false
    },
    {
      id: 3,
      text: t('chat.text2'),
      sender: t('chat.bot'),
      time: '09:26 am',
      isTyping: false
    },
    {
      id: 4,
      text: t('chat.text3'),
      sender: t('chat.user'),
      time: '09:24 am',
      isTyping: false
    },
    {
      id: 5,
      text: t('chat.text4'),
      sender: t('chat.user'),
      time: '',
      isTyping: false
    },
    {
      id: 6,
      text: t('chat.text5'),
      sender: t('chat.bot'),
      time: '08:22 am',
      isTyping: false
    }
  ];
};
