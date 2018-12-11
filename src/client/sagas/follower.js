import {
  put, takeEvery,
  // call
} from 'redux-saga/effects';

import api from '../utils/api';
import {
  SEARCH_FOLLOWERS,
  FOLLOWERS_LOADING,
  FOLLOWERS_FAILED,
  FOLLOWERS_SEARCHED,
} from '../actions/follower';

function* searchFollowers({ username = '', page = 1 } = {}) {
  try {
    yield put({
      type: FOLLOWERS_LOADING,
      message: 'Loading Followers...',
    });

    const data = yield api({
      url: `/users/${username}/followers`,
      method: 'GET',
      params: {
        page,
        per_page: 30,
      },
    }).then(response => response.data);

    yield put({
      type: FOLLOWERS_SEARCHED,
      data,
      page,
    });
  } catch (err) {
    yield put({
      type: FOLLOWERS_FAILED,
      error: err.message || 'Error on Github User Followers API',
    });
  }
}

export default function* searchFollowingsSaga() {
  yield takeEvery(SEARCH_FOLLOWERS, searchFollowers);
}
