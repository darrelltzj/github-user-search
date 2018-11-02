import axios from 'axios';

import {
  USERS_LOADING,
  USERS_FAILED,
  USERS_SEARCHED,
  USER_SEARCHED,
} from '../reducers/types';

export function searchUsersAction({ q = '', page = 1 } = {}) {
  return async function search(dispatch) {
    try {
      await dispatch({
        type: USERS_LOADING,
        message: 'Searching...',
      });

      const res = await axios({
        url: 'https://api.github.com/search/users',
        method: 'GET',
        params: {
          q,
          in: 'login',
          type: 'user',
          page,
          per_page: 30,
        },
      }).then(response => response.data);

      console.log('res', res);

      await dispatch({
        type: USERS_SEARCHED,
        data: res.items,
        page,
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

      const data = await axios({
        url: `https://api.github.com/users/${username}`,
        method: 'GET',
      }).then(response => response.data);

      await dispatch({
        type: USER_SEARCHED,
        data,
        repos: data.public_repos || 0,
        followers: data.followers || 0,
        following: data.following || 0,
      });

      return data;
    } catch (error) {
      dispatch({ type: USERS_FAILED, error });

      throw error;
    }
  };
}
