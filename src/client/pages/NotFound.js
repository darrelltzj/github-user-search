import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Head from '../components/containers/Head';

const NotFoundContainer = styled.section`
  min-height: 75vh;
  display: grid;
  div {
    margin: auto;
  }
`;

const NotFound = (props) => {
  const { location = {} } = props;
  const { pathname = '/' } = location || {};
  return (
    <NotFoundContainer>
      <Head
        title="Github User Search | 404"
        type="website"
        pathname={pathname}
        description="This page does not exist. Return to Home."
      />
      <div>
        <p>
          Opps. This page does not exist.
        </p>
        <Link to="/">Return to Home</Link>
      </div>
    </NotFoundContainer>
  );
};

NotFound.propTypes = {
  location: PropTypes.shape({}),
};

NotFound.defaultProps = {
  location: {},
};

export default NotFound;
