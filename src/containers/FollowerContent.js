import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import searchFollowersAction from '../actions/followerActions';
import ListRow from '../components/atoms/ListRow';
import Pagination from '../components/pagination/Pagination';

function FollowerContent(props) {
  const { username, followers, searchFollowers } = props;
  return (
    <React.Fragment>
      {followers.data.map(repo => (
        <ListRow key={repo.id}>
          TEST
        </ListRow>
      ))}
      <Pagination
        page={followers.page}
        last={followers.total >= 30 ? Math.floor(followers.total / 30) + 1 : 1}
        onChange={page => searchFollowers({ username, page })}
      />
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  const { followers } = state;
  return { followers };
}

export default connect(mapStateToProps, {
  searchFollowers: searchFollowersAction,
})(FollowerContent);
