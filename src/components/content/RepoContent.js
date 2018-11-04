import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import searchReposAction from '../../actions/repositoryActions';
import A from '../atoms/A';
import Pagination from '../atoms/Pagination';
import Span from '../atoms/Span';
import Row from '../layouts/Row';

function RepoContent(props) {
  const { username, repos, searchRepos } = props;
  return (
    <React.Fragment>
      {repos.data.map(repo => (
        <Row key={repo.id} alignItems="center" padding="10px 0">
          <A
            href={repo.svn_url}
            target="_blank"
            rel="noopener noreferrer"
            color="#005cd0"
            fontSize="20px"
          >
            {repo.name}
          </A>
          <Span
            color="#555"
            fontSize="14px"
            margin="0 10px 0 auto"
          >
            {moment(repo.updated_at).local().format('YYYY-MM-DD')}
          </Span>
        </Row>
      ))}
      <Pagination
        page={repos.page}
        last={repos.total >= 30 ? Math.floor(repos.total / 30) + 1 : 1}
        onChange={page => searchRepos({ username, page })}
      />
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  const { repos } = state;
  return { repos };
}

export default connect(mapStateToProps, {
  searchRepos: searchReposAction,
})(RepoContent);
