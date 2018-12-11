import createAction from './utils';

export const SEARCH_USERS = 'SEARCH_USERS';
export const SEARCH_USER = 'SEARCH_USER';
export const CLEAR_USERS = 'CLEAR_USERS';

export function searchUsersActn(payload) {
  return createAction(SEARCH_USERS, payload);
}

export function searchUserActn(payload) {
  return createAction(SEARCH_USER, payload);
}

export function clearUsersActn(payload) {
  return createAction(CLEAR_USERS, payload);
}

export const USERS_LOADING = 'USERS_LOADING';
export const USERS_FAILED = 'USERS_FAILED';
export const USERS_SEARCHED = 'USERS_SEARCHED';
export const USER_SEARCHED = 'USER_SEARCHED';
