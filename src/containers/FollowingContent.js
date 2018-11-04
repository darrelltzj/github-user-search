import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import searchFollowingsAction from '../actions/followingActions';
import Row from '../components/layouts/Row';
import Pagination from '../components/atoms/Pagination';

function FollowerContent(props) {
  const { username, followings, searchFollowings } = props;
  return (
    <React.Fragment>
      <Row>
        {followings.data.map(following => (
          <Link to={`/users/${following.login}`} key={following.id}>
            <div style={{ width: 100, padding: 10, margin: 'auto' }}>
              <img
                src={following.avatar_url}
                alt={following.login}
                style={{ width: '100%', borderRadius: 8 }}
              />
              <p style={{
                textAlign: 'center',
                textDecoration: 'none',
                color: '#005cd0',
                fontSize: 20,
              }}
              >
                {following.login}
              </p>
            </div>
          </Link>
        ))}
      </Row>
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
