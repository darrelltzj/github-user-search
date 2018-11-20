/* global window */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { searchUsersActn, clearUsersActn } from '../actions/user';
import Button from '../components/atoms/Button';
import Input from '../components/atoms/Input';
import Loader from '../components/atoms/Loader';
import Pagination from '../components/atoms/Pagination';
import Row from '../components/layouts/Row';
import Col from '../components/layouts/Col';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: window.localStorage.getItem('q'),
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePagination = this.handlePagination.bind(this);
  }

  componentDidMount() {
    this.handleSubmit();
    this.searchInput.focus();
  }

  handleChange(q) { this.setState({ q }); }

  handleSubmit(e) {
    const { searchUsers, clearUsers } = this.props;

    const { q } = this.state;

    if (e) { e.preventDefault(); }

    if (q !== undefined && q !== null && q !== '') {
      searchUsers({ q, page: 1 });
    } else {
      clearUsers();
    }

    window.localStorage.setItem('q', q);
  }

  handlePagination(page) {
    const { searchUsers } = this.props;
    const { q } = this.state;
    searchUsers({ q, page });
  }

  render() {
    const { q } = this.state;

    const {
      users: {
        loading,
        data,
        page,
        total,
      } = {},
    } = this.props;

    return (
      <Loader
        loading={loading && true}
        message={loading}
      >
        <div
          style={{
            padding: 10,
            minHeight: '78vh',
          }}
        >
          <form
            onSubmit={e => this.handleSubmit(e)}
            style={{
              position: 'sticky',
              top: 110,
              zIndex: 5,
            }}
          >
            <Row>
              <Col xs={10}>
                <Input
                  ref={(input) => { this.searchInput = input; }}
                  value={q}
                  placeholder="Username"
                  onChange={e => this.handleChange(e.target.value)}
                />
              </Col>
              <Col xs={2}>
                <Button type="submit">
                  Search
                </Button>
              </Col>
            </Row>
          </form>

          <div>
            <Row>
              {data.map(user => (
                <Link to={`/users/${user.login}`} key={user.id}>
                  <div style={{ width: 250, padding: 10, margin: 'auto' }}>
                    <img
                      src={user.avatar_url}
                      alt={user.login}
                      style={{ width: '100%', borderRadius: 8 }}
                    />
                    <p style={{
                      textAlign: 'center',
                      textDecoration: 'none',
                      color: '#005cd0',
                      fontSize: 20,
                    }}
                    >
                      {user.login}
                    </p>
                  </div>
                </Link>
              ))}
            </Row>
            {data && data.length > 0 && (
              <Pagination
                page={page}
                last={(
                  Math.min(
                    Math.floor(1000 / 30),
                    total >= 30 ? Math.floor(total / 30) + 1 : 1,
                  )
                )}
                onChange={this.handlePagination}
              />
            )}
          </div>
        </div>
      </Loader>
    );
  }
}

Home.propTypes = {
  users: PropTypes.shape({}),
  searchUsers: PropTypes.func,
  clearUsers: PropTypes.func,
};

Home.defaultProps = {
  users: {},
  searchUsers: null,
  clearUsers: null,
};

function mapStateToProps(state) {
  const { users } = state;
  return { users };
}

const mapDispatchToProps = {
  searchUsers: searchUsersActn,
  clearUsers: clearUsersActn,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
