import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MemoScreen from './Components/Home/MemoScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Memo"
          component={MemoScreen}
          options={{ title: '메모장' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;