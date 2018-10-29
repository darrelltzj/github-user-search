import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { searchUsersAction } from '../actions/userActions';
import Row from '../components/layouts/Row';
import Col from '../components/layouts/Col';
import Input from '../components/forms/Input';
import Button from '../components/forms/Button';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { q: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(q) { this.setState({ q }); }

  handleSubmit(e) {
    const { searchUsers } = this.props;
    const { q } = this.state;
    e.preventDefault();
    searchUsers(q);
  }

  render() {
    const { q } = this.state;
    return (
      <section>
        <form onSubmit={e => this.handleSubmit(e)}>
          <Row>
            <Col xs={10}>
              <Input
                value={q}
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
      </section>
    );
  }
}

Home.propTypes = {
  users: PropTypes.shape({}),
  searchUsers: PropTypes.func,
};

Home.defaultProps = {
  users: {},
  searchUsers: null,
};

function mapStateToProps(state) {
  const { users } = state;
  return { users };
}

export default connect(mapStateToProps, {
  searchUsers: searchUsersAction,
})(Home);
