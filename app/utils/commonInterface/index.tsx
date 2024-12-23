import { NavigationProp, RouteProp } from '@react-navigation/native';

export interface RouterProps {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
}

export interface CategoriesItem {
  title: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface CategoriesMenu {
  title: string;
}