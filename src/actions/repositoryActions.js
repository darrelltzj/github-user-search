import axios from 'axios';

import {
  REPOS_LOADING,
  REPOS_FAILED,
  REPOS_SEARCHED,
} from '../reducers/types';

export default function ({ username = '', page = 1 } = {}) {
  return async function search(dispatch) {
    try {
      await dispatch({
        type: REPOS_LOADING,
        message: 'Loading Repositories...',
      });

      const data = await axios({
        url: `https://api.github.com/users/${username}/repos`,
        method: 'GET',
        params: {
          page,
          per_page: 30,
        },
      }).then(response => response.data);

      console.log('data', data);

      await dispatch({
        type: REPOS_SEARCHED,
        data,
        page,
      });

      return data;
    } catch (error) {
      dispatch({ type: REPOS_FAILED, error });

      throw error;
    }
  };
}
