import axios from 'axios';

import {
  FOLLOWINGS_LOADING,
  FOLLOWINGS_FAILED,
  FOLLOWINGS_SEARCHED,
} from '../reducers/types';

export default function ({ username = '', page = 1 } = {}) {
  return async function search(dispatch) {
    try {
      await dispatch({
        type: FOLLOWINGS_LOADING,
        message: 'Loading Following...',
      });

      const data = await axios({
        url: `https://api.github.com/users/${username}/following`,
        method: 'GET',
        params: {
          page,
          per_page: 30,
        },
      }).then(response => response.data);

      console.log('data', data);

      await dispatch({
        type: FOLLOWINGS_SEARCHED,
        data,
        page,
      });

      return data;
    } catch (error) {
      dispatch({ type: FOLLOWINGS_FAILED, error });

      throw error;
    }
  };
}
