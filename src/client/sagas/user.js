import {
  put, takeEvery,
  // call
} from 'redux-saga/effects';

import api from '../utils/api';
import {
  SEARCH_USERS,
  SEARCH_USER,
  CLEAR_USERS,
  USERS_LOADING,
  USERS_FAILED,
  USERS_SEARCHED,
  USER_SEARCHED,
} from '../actions/user';

function* searchUsers({ q = '', page = 1 } = {}) {
  try {
    yield put({
      type: USERS_LOADING,
      message: 'Searching...',
    });

    const res = q !== undefined && q !== null && q !== '' ? yield api({
      url: '/search/users',
      method: 'GET',
      params: {
        q,
        in: 'login',
        type: 'user',
        page,
        per_page: 30,
      },
    }).then(response => response.data) : {
      items: [],
      total_count: 0,
    };

    yield put({
      type: USERS_SEARCHED,
      data: res.items,
      page,
      total: res.total_count,
    });
  } catch (err) {
    yield put({
      type: USERS_FAILED,
      error: err.message || 'Error on Github Search API',
    });
  }
}

function* searchUser({ username } = {}) {
  try {
    yield put({
      type: USERS_LOADING,
      message: 'Loading...',
    });

    const data = yield api({
      url: `/users/${username}`,
      method: 'GET',
    }).then(response => response.data);

    yield put({
      type: USER_SEARCHED,
      data,
      repos: data.public_repos || 0,
      followers: data.followers || 0,
      followings: data.following || 0,
    });
  } catch (err) {
    yield put({
      type: USERS_FAILED,
      error: err.message || 'Error on Github User API',
    });
  }
}

function* clearUsers() {
  yield put({
    type: USERS_SEARCHED,
    data: [],
    page: 1,
    total: 0,
  });
}

export function* searchUsersSaga() {
  yield takeEvery(SEARCH_USERS, searchUsers);
}

export function* searchUserSaga() {
  yield takeEvery(SEARCH_USER, searchUser);
}

export function* clearUsersSaga() {
  yield takeEvery(CLEAR_USERS, clearUsers);
}

export default {
  searchUsersSaga,
  searchUserSaga,
  clearUsersSaga,
};
