import {
  put, takeEvery,
  // call
} from 'redux-saga/effects';

import api from '../utils/api';
import {
  SEARCH_REPOS,
  REPOS_LOADING,
  REPOS_FAILED,
  REPOS_SEARCHED,
} from '../actions/repo';

function* searchRepos({ username = '', page = 1 } = {}) {
  try {
    yield put({
      type: REPOS_LOADING,
      message: 'Loading Repositories...',
    });

    const data = yield api({
      url: `/users/${username}/repos`,
      method: 'GET',
      params: {
        page,
        per_page: 30,
      },
    }).then(response => response.data);

    yield put({
      type: REPOS_SEARCHED,
      data,
      page,
    });
  } catch (err) {
    yield put({
      type: REPOS_FAILED,
      error: err.message || 'Error on Github User Repos API',
    });
  }
}

export default function* searchFollowingsSaga() {
  yield takeEvery(SEARCH_REPOS, searchRepos);
}
