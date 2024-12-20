import { NavigationProp } from '@react-navigation/native';

export interface RouterProps {
  navigation: NavigationProp<any, any>;
}

export interface CategoriesItem {
  title: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}