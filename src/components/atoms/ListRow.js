import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledListRow = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
flex-wrap: wrap;
align-items: center;
padding: 10px 0;
`;

function ListRow(props) {
  const { children } = props;
  return (
    <StyledListRow>
      {children}
    </StyledListRow>
  );
}

export default ListRow;
