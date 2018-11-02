import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { searchUserAction } from '../actions/userActions';
import searchRepoAction from '../actions/repositoryActions';
import Row from '../components/layouts/Row';
import Col from '../components/layouts/Col';
import Pagination from '../components/pagination/Pagination';

class User extends Component {
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
    const { users, repos } = this.props;
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
              <div style={{
                display: 'flex',
                flexDirection: 'row',
              }}
              >
                <div style={{
                  padding: 10,
                  marginRight: 10,
                  textAlign: 'center',
                }}
                >
                  <span>
                    Repositories
                    {' '}
                    {repos.total}
                  </span>
                </div>
                <div style={{
                  padding: 10,
                  marginRight: 10,
                  textAlign: 'center',
                }}
                >
                  <span>Followers</span>
                </div>
                <div style={{
                  padding: 10,
                  marginRight: 10,
                  textAlign: 'center',
                }}
                >
                  <span>Following</span>
                </div>
              </div>
              <div style={{ padding: 10 }}>
                {repos.data.map(repo => (
                  <div
                    key={repo.id}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      padding: '10px 0',
                    }}
                  >
                    <span style={{
                      marginRight: 10,
                      fontSize: 20,
                    }}
                    >
                      {repo.name}
                    </span>
                    <span style={{
                      marginRight: 10,
                      marginLeft: 'auto',
                    }}
                    >
                      {repo.updated_at}
                    </span>
                  </div>
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
  searchUser: PropTypes.func,
  searchRepo: PropTypes.func,
};

User.defaultProps = {
  match: {},
  users: {},
  repos: {},
  searchUser: null,
  searchRepo: null,
};

function mapStateToProps(state) {
  const { users, repos } = state;
  return { users, repos };
}

export default connect(mapStateToProps, {
  searchUser: searchUserAction,
  searchRepo: searchRepoAction,
})(User);
