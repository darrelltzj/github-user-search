import createAction from './utils';

export const SEARCH_FOLLOWINGS = 'SEARCH_FOLLOWINGS';

export function searchFollowingsActn(payload) {
  return createAction(SEARCH_FOLLOWINGS, payload);
}

export const FOLLOWINGS_LOADING = 'FOLLOWINGS_LOADING';
export const FOLLOWINGS_FAILED = 'FOLLOWINGS_FAILED';
export const FOLLOWINGS_SEARCHED = 'FOLLOWINGS_SEARCHED';
