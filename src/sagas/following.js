import axios from 'axios';
import {
  put, takeEvery,
  // call
} from 'redux-saga/effects';

import {
  SEARCH_FOLLOWINGS,
  FOLLOWINGS_LOADING,
  FOLLOWINGS_FAILED,
  FOLLOWINGS_SEARCHED,
} from '../actions/following';

function* searchFollowings({ username = '', page = 1 } = {}) {
  try {
    yield put({
      type: FOLLOWINGS_LOADING,
      message: 'Loading Following...',
    });

    const data = yield axios({
      url: `https://api.github.com/users/${username}/following`,
      method: 'GET',
      params: {
        page,
        per_page: 30,
      },
    }).then(response => response.data);

    yield put({
      type: FOLLOWINGS_SEARCHED,
      data,
      page,
    });
  } catch (error) {
    put({ type: FOLLOWINGS_FAILED, error });
  }
}

export default function* searchFollowingsSaga() {
  yield takeEvery(SEARCH_FOLLOWINGS, searchFollowings);
}
