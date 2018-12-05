import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: sticky;
  top: 0px;
  z-index: 10;
  background-color: ${props => props.theme.greyDark};
  color: ${props => props.theme.white};
  padding: 10px;
`;

const Header = () => (
  <StyledHeader>
    <Link to="/">
      <h1 style={{ color: '#fff' }}>
        Github Users
      </h1>
    </Link>
  </StyledHeader>
);

export default Header;
