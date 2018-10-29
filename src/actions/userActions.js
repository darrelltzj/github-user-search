import axios from 'axios';

import {
  USERS_LOADING,
  USERS_FAILED,
  USERS_SEARCHED,
  USER_SEARCHED,
} from '../reducers/types';

export function searchUsersAction(q = '') {
  return async function search(dispatch) {
    try {
      await dispatch({ type: USERS_LOADING });

      const response = await axios({
        url: 'https://api.github.com/search/users',
        method: 'GET',
        params: { q, in: 'login' },
      }).then(res => res.data);

      await dispatch({ type: USERS_SEARCHED, response });

      return response;
    } catch (error) {
      dispatch({ type: USERS_FAILED, error });

      throw error;
    }
  };
}

export function searchUserAction(username) {
  return async function search(dispatch) {
    try {
      await dispatch({ type: USERS_LOADING });

      const response = await axios({
        url: `https://api.github.com/search/users/${username}`,
        method: 'GET',
      }).then(res => res.data);

      await dispatch({ type: USER_SEARCHED, response });

      return response;
    } catch (error) {
      dispatch({ type: USERS_FAILED, error });

      throw error;
    }
  };
}
