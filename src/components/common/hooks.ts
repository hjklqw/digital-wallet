import { UserState } from '../../reducers/user.state';
import { AppState } from '../../reducers/app.state';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchUserFromToken } from '../../services/user.service';

export function useUserState(): boolean {

  const userState: UserState = useSelector((state: AppState) => state.user, shallowEqual);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!userState.hasLoaded) {
      (async () => {
        (await fetchUserFromToken())(dispatch);
      })();
    }
  }, [dispatch, userState.hasLoaded]);

  return userState.user != null;

};