import {useEffect, useState} from 'react';
import {userInit} from '../features/userReducer';
import {useAppDispatch} from '../redux-store/reduxHooks';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    if (isPending) {
      initializeUser();
    }
  }, []);

  const initializeUser = () => {
    setIsPending(true);
    setTimeout(() => {
      dispatch(userInit());
      setIsPending(false);
    }, 500);
  };
  return {
    isPending,
  };
};
