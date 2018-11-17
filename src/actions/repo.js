import createAction from './utils';

export const SEARCH_REPOS = 'search_repos';

export function searchReposActn(payload) {
  return createAction(SEARCH_REPOS, payload);
}

export const REPOS_LOADING = 'repos_loading';
export const REPOS_FAILED = 'repos_failed';
export const REPOS_SEARCHED = 'repos_searched';
