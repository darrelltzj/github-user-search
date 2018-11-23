import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTabBtn = styled.span`
padding: 10px;
margin-right: 10px;
text-align: center;
font-size: 18px;
cursor: pointer;
color: ${props => (props.selected ? props.theme.black : props.theme.grey)};
border-bottom: solid ${props => (props.selected ? `2px ${props.theme.orange}` : `1px ${props.theme.grey}`)};

:hover {
  border-bottom: solid ${props => (props.selected ? `2px ${props.theme.orange}` : `2px ${props.theme.grey}`)};
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

TabBtn.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  selected: PropTypes.bool,
  handleSelect: PropTypes.func,
};

TabBtn.defaultProps = {
  type: '',
  name: '',
  selected: false,
  handleSelect: null,
};

export default TabBtn;
