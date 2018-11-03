import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import searchFollowingsAction from '../actions/followingActions';
import ListRow from '../components/atoms/ListRow';
import Pagination from '../components/pagination/Pagination';

function FollowerContent(props) {
  const { username, followings, searchFollowings } = props;
  return (
    <React.Fragment>
      {followings.data.map(repo => (
        <ListRow key={repo.id}>
          TEST
        </ListRow>
      ))}
      <Pagination
        page={followings.page}
        last={followings.total >= 30 ? Math.floor(followings.total / 30) + 1 : 1}
        onChange={page => searchFollowings({ username, page })}
      />
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  const { followings } = state;
  return { followings };
}

export default connect(mapStateToProps, {
  searchFollowings: searchFollowingsAction,
})(FollowerContent);
