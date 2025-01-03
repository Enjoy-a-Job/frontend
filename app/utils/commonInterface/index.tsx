import { NavigationProp, RouteProp } from '@react-navigation/native';

export interface RouterProps {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
}

export interface CategoriesItem {
  title: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface CategoriesDetailsMenu {
  name: string;
  review: string;
  rate: number;
  rating: number;
  picture: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface CategoriesMenu {
  title: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  data: Array<CategoriesDetailsMenu>;
}

export interface CourseDetailIcon {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface Inbox {
  name: string;
  status: string;
  message: string;
  time: string;
  recentMessage: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  chat: Array<Chat>;
}

export interface Chat {
  id: number;
  text: string;
  sender: string;
  time: string;
  isTyping: boolean;
}
