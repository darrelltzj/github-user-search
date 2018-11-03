import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { searchUserAction } from '../actions/userActions';
import searchRepoAction from '../actions/repositoryActions';
import Row from '../components/layouts/Row';
import Col from '../components/layouts/Col';
import Pagination from '../components/pagination/Pagination';
import ListRow from '../components/atoms/ListRow';
import Span from '../components/atoms/Span';
import TabToggle from './TabToggle';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: 'repo' };
  }

  async componentDidMount() {
    const {
      searchUser,
      searchRepo,
      match: { params: { username } = {} } = {},
    } = this.props;
    await searchUser(username);
    await searchRepo({ username, page: 1 });
  }

  render() {
    const {
      users,
      repos,
      followers,
      followings,
    } = this.props;

    const { selected } = this.state;

    const user = users.data[0] || {};

    return (
      <section style={{ padding: '10px 100px' }}>
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
                {user.created_at}
              </p>
              <p>
                Updated:
                {' '}
                {user.updated_at}
              </p>
            </div>
          </Col>
          <Col xs={8}>
            <div style={{ padding: 20 }}>
              <TabToggle
                titles={[{
                  name: `Repositories ${repos.total}`,
                  key: 'repo',
                }, {
                  name: `Followers ${followers.total}`,
                  key: 'followers',
                }, {
                  name: `Following ${followings.total}`,
                  key: 'following',
                }]}
                selected={selected}
              />
              <div style={{ padding: 10 }}>
                {repos.data.map(repo => (
                  <ListRow key={repo.id}>
                    <Span color="#005cd0" fontSize="20px">
                      {repo.name}
                    </Span>
                    <Span color="#555" margin="0 10px 0 auto">
                      {repo.updated_at}
                    </Span>
                  </ListRow>
                ))}
                <Pagination
                  page={repos.page}
                  total={repos.total}
                  perPage={30}
                  // onChange={() => console.log('test')}
                />
              </div>
            </div>
          </Col>
        </Row>
      </section>
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
};

User.defaultProps = {
  match: {},
  users: {},
  repos: {},
  followers: {},
  followings: {},
  searchUser: null,
  searchRepo: null,
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
  searchUser: searchUserAction,
  searchRepo: searchRepoAction,
})(User);
