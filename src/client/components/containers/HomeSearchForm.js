import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Row from '../layouts/Row';
import Col from '../layouts/Col';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import HomeSearchItem from './HomeSearchItem';

const { CancelToken } = axios;

class HomeSearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.onChange = this.onChange.bind(this);
    this.preSearch = this.preSearch.bind(this);
  }

  componentDidMount() { this.searchInput.focus(); }

  onChange(q) {
    const { handleChange } = this.props;
    if (handleChange) handleChange(q);
    this.preSearch(q);
  }

  async preSearch(q) {
    if (q.length < 1) { return this.setState({ items: [] }); }

    try {
      if (this.cancelSearch && typeof this.cancelSearch === 'function') {
        await this.cancelSearch('Previous Request Cancelled due to New Request');
      }

      const { items } = await axios({
        url: 'https://api.github.com/search/users',
        method: 'GET',
        params: {
          q,
          in: 'login',
          type: 'user',
          page: 1,
          per_page: 6,
        },
        cancelToken: new CancelToken((c) => { this.cancelSearch = c; }),
      }).then(response => response.data);

      this.setState({ items });
    } catch (err) {
      if (!axios.isCancel(err)) { this.setState({ items: [] }); }
    }

    return null;
  }

  render() {
    const { q, handleSubmit } = this.props;

    const { items } = this.state;

    return (
      <form
        onSubmit={e => handleSubmit(e)}
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
              data-testid="search-input"
              onChange={e => this.onChange(e.target.value)}
            />
            {items.length > 0 && (
              <div style={{
                background: 'white',
                position: 'absolute',
                width: '100%',
                top: '100%',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                zIndex: 5,
                left: 0,
              }}
              >
                {items.map(user => (
                  <HomeSearchItem key={user.id} user={user} />
                ))}
              </div>
            )}
          </Col>
          <Col xs={2}>
            <Button type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </form>
    );
  }
}

HomeSearchForm.propTypes = {
  q: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

HomeSearchForm.defaultProps = {
  q: 'a',
  handleChange: null,
  handleSubmit: null,
};

export default HomeSearchForm;
