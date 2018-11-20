import React from 'react';
import styled from 'styled-components';

import A from '../atoms/A';
import Span from '../atoms/Span';

const StyledFooter = styled.footer`
align-self: center;
margin-top: auto;
padding: 10px;
`;

const Footer = () => (
  <StyledFooter>
    <Span color="#777">
      Designed by
      {' '}
      <A
        href="https://www.darrelltzj.com/"
        target="_blank"
        rel="noopener noreferrer"
        color="#777"
      >
        DarrellTZJ
      </A>
    </Span>
  </StyledFooter>
);

export default Footer;
