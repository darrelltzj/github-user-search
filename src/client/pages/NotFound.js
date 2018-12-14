import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundContainer = styled.section`
  min-height: 75vh;
  display: grid;
  div {
    margin: auto;
  }
`;

const NotFound = () => (
  <NotFoundContainer>
    <div>
      <p>
        Opps. This page does not exist.
      </p>
      <Link to="/">Return to Home</Link>
    </div>
  </NotFoundContainer>
);

export default NotFound;
