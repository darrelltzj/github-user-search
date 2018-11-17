import createAction from './utils';

export const SEARCH_FOLLOWERS = 'search_followers';

export function searchFollowersActn(payload) {
  return createAction(SEARCH_FOLLOWERS, payload);
}

export const FOLLOWERS_LOADING = 'followers_loading';
export const FOLLOWERS_FAILED = 'followers_failed';
export const FOLLOWERS_SEARCHED = 'followers_searched';
