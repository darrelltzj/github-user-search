import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTabBtn = styled.span`
padding: 10px;
margin-right: 10px;
text-align: center;
font-size: 18px;
cursor: pointer;
color: ${props => (props.selected ? '#000' : '#999')};
border-bottom: solid ${props => (props.selected ? '2px #f55400' : '1px #999')};

:hover {
  border-bottom: solid ${props => (props.selected ? '2px #f55400' : '2px #999')};
}

@media (max-width: 576px) {
  margin-right: 2px;
  font-size: 15px;
}
`;

function TabBtn(props) {
  const {
    type,
    name,
    selected,
    handleSelect,
  } = props;
  return (
    <StyledTabBtn
      selected={selected}
      onClick={() => handleSelect(type)}
    >
      {name}
    </StyledTabBtn>
  );
}

export default TabBtn;
