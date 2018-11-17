import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { searchFollowersActn } from '../../actions/follower';
import Pagination from '../atoms/Pagination';
import Row from '../layouts/Row';

function FollowerContent(props) {
  const { username, followers, searchFollowers } = props;
  return (
    <React.Fragment>
      <Row>
        {followers.data.map(follower => (
          <Link to={`/users/${follower.login}`} key={follower.id}>
            <div style={{ width: 100, padding: 10, margin: 'auto' }}>
              <img
                src={follower.avatar_url}
                alt={follower.login}
                style={{ width: '100%', borderRadius: 8 }}
              />
              <p style={{
                textAlign: 'center',
                textDecoration: 'none',
                color: '#005cd0',
                fontSize: 20,
              }}
              >
                {follower.login}
              </p>
            </div>
          </Link>
        ))}
      </Row>
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
  searchFollowers: searchFollowersActn,
})(FollowerContent);
