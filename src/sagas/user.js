import axios from 'axios';
import {
  put, takeEvery,
  // call
} from 'redux-saga/effects';

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
    // console.log('test')
    yield put({
      type: USERS_LOADING,
      message: 'Searching...',
    });

    const res = yield axios({
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

    yield put({
      type: USERS_SEARCHED,
      data: res.items,
      page,
      total: res.total_count,
    });
  } catch (error) {
    put({ type: USERS_FAILED, error });
  }
}

function* searchUser({ username } = {}) {
  try {
    yield put({
      type: USERS_LOADING,
      message: 'Loading...',
    });

    const data = yield axios({
      url: `https://api.github.com/users/${username}`,
      method: 'GET',
    }).then(response => response.data);

    yield put({
      type: USER_SEARCHED,
      data,
      repos: data.public_repos || 0,
      followers: data.followers || 0,
      followings: data.following || 0,
    });
  } catch (error) {
    put({ type: USERS_FAILED, error });
  }
}

function clearUsers() {
  put({
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
