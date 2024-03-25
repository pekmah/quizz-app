import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  quiz: undefined;
  home: undefined;
};

export type quizScreenProp = StackNavigationProp<RootStackParamList, 'quiz'>;
