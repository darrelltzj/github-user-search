/* globals afterEach expect test */
import '@babel/polyfill/noConflict';
import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import HomeSearchForm from '../HomeSearchForm';

afterEach(cleanup);

test('<HomeSearchForm />', () => {
  const {
    debug,
    getByTestId,
    // getByText,
    queryByTestId,
    container,
  } = render(<HomeSearchForm />);

  const searchInput = getByTestId('search-input');

  expect(searchInput.tagName).toBe('INPUT');

  expect(queryByTestId('search-input').textContent).toBe('');

  expect(searchInput.textContent).toBe('');

  fireEvent.change(searchInput, {
    target: { value: 'darrellt' },
  });

  // expect(searchInput.textContent).toBe('darrellt');

  expect(container.firstChild).toMatchSnapshot();

  // console.log(searchInput.tagName, searchInput.textContent);

  debug();
});
