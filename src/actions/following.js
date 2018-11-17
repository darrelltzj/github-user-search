import createAction from './utils';

export const SEARCH_FOLLOWINGS = 'search_followings';

export function searchFollowingsActn(payload) {
  return createAction(SEARCH_FOLLOWINGS, payload);
}

export const FOLLOWINGS_LOADING = 'followings_loading';
export const FOLLOWINGS_FAILED = 'followings_failed';
export const FOLLOWINGS_SEARCHED = 'followings_searched';
