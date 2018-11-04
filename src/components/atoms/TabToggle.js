import React from 'react';
import styled from 'styled-components';

import TabBtn from './TabBtn';

const StyledListRow = styled.div`
display: flex;
flex-direction: row;
`;

function TabToggle(props) {
  const { titles, selected, handleSelect } = props;
  return (
    <StyledListRow>
      {titles.map(title => (
        <TabBtn
          key={title.key}
          type={title.key}
          name={title.name}
          selected={title.key === selected}
          handleSelect={handleSelect}
        />
      ))}
    </StyledListRow>
  );
}

export default TabToggle;
