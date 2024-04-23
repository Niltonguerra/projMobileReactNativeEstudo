// types.ts
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  CreateAccount: undefined;
  DetailAccount: undefined;
  EditAccount: undefined;
  Product: undefined;
};

export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
export type CreateAccountScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CreateAccount'>;
export type DetailAccountScreenNavigationProp = StackNavigationProp<RootStackParamList, 'DetailAccount'>;
export type EditAccountScreenNavigationProp = StackNavigationProp<RootStackParamList, 'EditAccount'>;
export type ProductScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Product'>;
