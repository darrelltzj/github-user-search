import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import RepoContent from './RepoContent';

const StyledTabContent = styled.div`
padding: 10px;
`;

function TabContent(props) {
  const { selected } = props;
  return (
    <StyledTabContent>
      {selected === 'repos' && <RepoContent />}
      {selected === 'followers' && <RepoContent />}
      {selected === 'followings' && <RepoContent />}
    </StyledTabContent>
  );
}

export default TabContent;
