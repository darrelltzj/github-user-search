import axios from 'axios';
import {
  put, takeEvery,
  // call
} from 'redux-saga/effects';

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

    const data = yield axios({
      url: `https://api.github.com/users/${username}/repos`,
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
  } catch (error) {
    put({ type: REPOS_FAILED, error });
  }
}

export default function* searchFollowingsSaga() {
  yield takeEvery(SEARCH_REPOS, searchRepos);
}
