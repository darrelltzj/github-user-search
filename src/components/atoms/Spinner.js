import React from 'react';
import styled from 'styled-components';

const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  width: 50px;
  height: 50px;
  padding: 12px;

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

const Circle = styled.circle`
stroke: #fff;
stroke-linecap: round;
animation: dash 1.5s ease-in-out infinite;
`;

function Spinner() {
  return (
    <StyledSpinner viewBox="0 0 50 50">
      <Circle
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="3"
      />
    </StyledSpinner>
  );
}

export default Spinner;
