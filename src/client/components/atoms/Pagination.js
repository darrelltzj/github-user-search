import React from 'react';
import PropTypes from 'prop-types';

function Pagination(props) {
  const {
    page,
    last,
    onChange,
  } = props;

  return (
    <div style={{ textAlign: 'center' }}>
      <button
        type="button"
        disabled={page === 1}
        style={{ cursor: 'pointer' }}
        onClick={() => onChange(1)}
      >
        {'|<'}
      </button>

      <button
        type="button"
        disabled={page === 1}
        style={{ cursor: 'pointer' }}
        onClick={() => onChange(page - 1)}
      >
        {'<'}
      </button>

      <span style={{ padding: 10 }}>
        {`${page} of ${last}`}
      </span>

      <button
        type="button"
        disabled={page >= last}
        style={{ cursor: 'pointer' }}
        onClick={() => onChange(page + 1)}
      >
        {'>'}
      </button>

      <button
        type="button"
        disabled={page >= last}
        style={{ cursor: 'pointer' }}
        onClick={() => onChange(last)}
      >
        {'>|'}
      </button>
    </div>
  );
}

Pagination.propTypes = {
  page: PropTypes.number,
  last: PropTypes.number,
  onChange: PropTypes.func,
};

Pagination.defaultProps = {
  page: 1,
  last: 1,
  onChange: null,
};

export default Pagination;
