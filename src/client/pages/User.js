import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';

import { searchUserActn } from '../actions/user';
import { searchReposActn } from '../actions/repo';
import { searchFollowersActn } from '../actions/follower';
import { searchFollowingsActn } from '../actions/following';
import Loader from '../components/atoms/Loader';
import TabToggle from '../components/atoms/TabToggle';
import Col from '../components/layouts/Col';
import Row from '../components/layouts/Row';
import UserContent from '../components/containers/UserContent';

const StyledUserContainer = styled.section`
  padding: 10px 100px;
  @media (max-width: 992px) {
    padding: 10px 0;
  }
`;

class User extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: 'repos' };
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentWillMount() {
    const {
      searchUser,
      searchRepo,
      match: { params: { username } = {} } = {},
    } = this.props;
    searchUser({ username });
    searchRepo({ username, page: 1 });
  }

  async componentDidUpdate(prevProps) {
    const {
      searchUser,
      searchRepo,
      searchFollowers,
      searchFollowing,
      match: { params: { username } = {} } = {},
    } = this.props;

    const { selected } = this.state;

    if (prevProps.match.params.username !== username) {
      await searchUser(username);

      if (selected === 'repos') {
        await searchRepo({ username, page: 1 });
      } else if (selected === 'followers') {
        await searchFollowers({ username, page: 1 });
      } else if (selected === 'followings') {
        await searchFollowing({ username, page: 1 });
      }
    }
  }

  handleSelect(selected) {
    const {
      repos,
      followers,
      followings,
      match: { params: { username } = {} } = {},
      searchRepo,
      searchFollowers,
      searchFollowing,
    } = this.props;

    this.setState({ selected });

    if (selected === 'repos') {
      searchRepo({ username, page: repos.page });
    } else if (selected === 'followers') {
      searchFollowers({ username, page: followers.page });
    } else if (selected === 'followings') {
      searchFollowing({ username, page: followings.page });
    }
  }

  render() {
    const {
      users,
      repos,
      followers,
      followings,
      match: { params: { username } = {} } = {},
    } = this.props;

    const { selected } = this.state;

    const user = users.data[0] || {};

    return (
      <StyledUserContainer>
        <Row>
          <Col xs={4}>
            <div style={{ padding: 20 }}>
              <img
                src={user.avatar_url}
                alt={user.login}
                style={{ width: '100%', borderRadius: 8 }}
              />
              <h2>{user.name}</h2>
              <h3>{user.login}</h3>
              <p>{user.bio}</p>
              <p>{user.company}</p>
              <p>{user.email}</p>
              <p>{user.blog}</p>
              <p>
                Created:
                {' '}
                {moment(user.created_at).local().format('YYYY-MM-DD')}
              </p>
              <p>
                Updated:
                {' '}
                {moment(user.update_at).local().format('YYYY-MM-DD')}
              </p>
            </div>
          </Col>
          <Col xs={8}>
            <Loader
              loading={(
                users.loading || repos.loading || followers.loading || followings.loading
              ) && true}
              message={users.loading || repos.loading || followers.loading || followings.loading}
            >
              <div style={{ padding: 20, minHeight: '70vh' }}>
                <TabToggle
                  titles={[{
                    name: `Repositories ${repos.total}`,
                    key: 'repos',
                  }, {
                    name: `Followers ${followers.total}`,
                    key: 'followers',
                  }, {
                    name: `Following ${followings.total}`,
                    key: 'followings',
                  }]}
                  selected={selected}
                  handleSelect={this.handleSelect}
                />
                <UserContent
                  username={username}
                  selected={selected}
                />
              </div>
            </Loader>
          </Col>
        </Row>
      </StyledUserContainer>
    );
  }
}

User.propTypes = {
  match: PropTypes.shape({}),
  users: PropTypes.shape({}),
  repos: PropTypes.shape({}),
  followers: PropTypes.shape({}),
  followings: PropTypes.shape({}),
  searchUser: PropTypes.func,
  searchRepo: PropTypes.func,
  searchFollowers: PropTypes.func,
  searchFollowing: PropTypes.func,
};

User.defaultProps = {
  match: {},
  users: {},
  repos: {},
  followers: {},
  followings: {},
  searchUser: null,
  searchRepo: null,
  searchFollowers: null,
  searchFollowing: null,
};

function mapStateToProps(state) {
  const {
    users,
    repos,
    followers,
    followings,
  } = state;
  return {
    users,
    repos,
    followers,
    followings,
  };
}

export default connect(mapStateToProps, {
  searchUser: searchUserActn,
  searchRepo: searchReposActn,
  searchFollowers: searchFollowersActn,
  searchFollowing: searchFollowingsActn,
})(User);
