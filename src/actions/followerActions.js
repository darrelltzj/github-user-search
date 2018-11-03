import axios from 'axios';

import {
  FOLLOWERS_LOADING,
  FOLLOWERS_FAILED,
  FOLLOWERS_SEARCHED,
} from '../reducers/types';

export default function ({ username = '', page = 1 } = {}) {
  return async function search(dispatch) {
    try {
      await dispatch({
        type: FOLLOWERS_LOADING,
        message: 'Searching...',
      });

      const data = await axios({
        url: `https://api.github.com/users/${username}/followers`,
        method: 'GET',
        params: {
          page,
          per_page: 30,
        },
      }).then(response => response.data);

      console.log('data', data);

      await dispatch({
        type: FOLLOWERS_SEARCHED,
        data,
        page,
      });

      return data;
    } catch (error) {
      dispatch({ type: FOLLOWERS_FAILED, error });

      throw error;
    }
  };
}
