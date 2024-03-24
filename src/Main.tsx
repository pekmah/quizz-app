import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './screens/Home.tsx';

const Stack = createStackNavigator();
const Main = (): React.JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Main;
