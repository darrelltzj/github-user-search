import createAction from './utils';

export const SEARCH_REPOS = 'SEARCH_REPOS';

export function searchReposActn(payload) {
  return createAction(SEARCH_REPOS, payload);
}

export const REPOS_LOADING = 'REPOS_LOADING';
export const REPOS_FAILED = 'REPOS_FAILED';
export const REPOS_SEARCHED = 'REPOS_SEARCHED';
