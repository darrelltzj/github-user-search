import React from 'react';

function Pagination(props) {
  const { page, total, perPage, onChange } = props;

  return (
    <div>
      {page > 1 && (
        <button
          type="button"
        >
          {'|<'}
        </button>
      )}
      {page > 1 && (
        <button
          type="button"
        >
          {'...'}
        </button>
      )}
      {page > 1 && (
        <button
          type="button"
        >
          {page - 1}
        </button>
      )}
      <button
        type="button"
      >
        {page}
      </button>
      <button
        type="button"
      >
        {page + 1}
      </button>
      <button
        type="button"
      >
        {'...'}
      </button>
      <button
        type="button"
      >
        {'>|'}
      </button>
    </div>
  );
}

export default Pagination;
