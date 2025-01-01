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
