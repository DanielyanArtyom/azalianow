import React from 'react';
import HomeScreen from '../../screens/HomeScreen';
import AddTodoScreen from '../../screens/AddToDoScreen';
import {NConst} from '../../constants/NavConstants';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={NConst.HOME_SCREEN} component={HomeScreen} />
      <Stack.Screen name={NConst.ADD_TODO_SCRENN} component={AddTodoScreen} />
    </Stack.Navigator>
  );
};
