import React from 'react';

function Pagination(props) {
  const { page, total, perPage, onChange } = props;

  // Github Search is up to the first 1000 items
  const last = Math.min(
    Math.floor(1000 / perPage),
    total >= perPage ? Math.floor(total / perPage) : 1,
  );

  console.log(page, last);

  return (
    <div>
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

      <input
        value={page}
        onChange={e => console.log(e)}
        style={{ width: 30, textAlign: 'center' }}
      />

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

export default Pagination;
