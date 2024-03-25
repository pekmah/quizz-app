import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './screens/Home.tsx';
import Quiz from './screens/Quiz.tsx';
import {RootStackParamList} from './types/navigation';

const Stack = createStackNavigator<RootStackParamList>();
const Main = (): React.JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="quiz"
        component={Quiz}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Main;
