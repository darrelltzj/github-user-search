import {
  fork,
  all,
} from 'redux-saga/effects';

import searchFollowingsSaga from './following';
import searchFollowersSaga from './follower';
import searchReposSaga from './repo';
import {
  searchUsersSaga,
  searchUserSaga,
  clearUsersSaga,
} from './user';

export default function* root() {
  yield all([
    // searchFollowingsSaga(),
    // searchFollowersSaga(),
    // searchReposSaga(),
    // searchUsersSaga(),
    // searchUserSaga(),
    // clearUsersSaga(),
    fork(searchFollowingsSaga),
    fork(searchFollowersSaga),
    fork(searchReposSaga),
    fork(searchUsersSaga),
    fork(searchUserSaga),
    fork(clearUsersSaga),
  ]);
  // .map(fork);
}
