import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// navigation types
import {PrivateRootNavigator} from './PrivateRootNavigator';

// loading screen
import StartupScreen from '../screens/StartUp';
import {useAuth} from '../hooks/useAuth';
import {useAppSelector} from '../redux-store/reduxHooks';
import {selectIsLoggedIn} from '../features/userReducer';

export const Navigation = () => {
  const {isPending} = useAuth();
  const isUserLoggedIn = useAppSelector(selectIsLoggedIn);

  if (isPending) {
    return <StartupScreen />;
  }

  return (
    <NavigationContainer>
      {isUserLoggedIn ? <PrivateRootNavigator /> : null}
    </NavigationContainer>
  );
};
