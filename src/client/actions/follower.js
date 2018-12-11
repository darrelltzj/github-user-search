import createAction from './utils';

export const SEARCH_FOLLOWERS = 'SEARCH_FOLLOWERS';

export function searchFollowersActn(payload) {
  return createAction(SEARCH_FOLLOWERS, payload);
}

export const FOLLOWERS_LOADING = 'FOLLOWERS_LOADING';
export const FOLLOWERS_FAILED = 'FOLLOWERS_FAILED';
export const FOLLOWERS_SEARCHED = 'FOLLOWERS_SEARCHED';
