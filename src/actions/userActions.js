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

      const res = await axios({
        url: 'https://api.github.com/search/users',
        method: 'GET',
        params: {
          q,
          in: 'login',
          page: 1,
          per_page: 100,
        },
      }).then(response => response.data);

      console.log('res', res);

      await dispatch({
        type: USERS_SEARCHED,
        data: res.items,
        page: 1,
        total: res.total_count,
      });

      return res;
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

      const res = await axios({
        url: `https://api.github.com/search/users/${username}`,
        method: 'GET',
      }).then(response => response.data);

      await dispatch({ type: USER_SEARCHED, data: res });

      return res;
    } catch (error) {
      dispatch({ type: USERS_FAILED, error });

      throw error;
    }
  };
}
