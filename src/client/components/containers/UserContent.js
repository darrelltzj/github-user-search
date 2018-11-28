import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import RepoContent from './UserRepos';
import FollowerContent from './UserFollowers';
import FollowingContent from './UserFollowings';

const StyledTabContent = styled.div`
padding: 10px;
`;

function UserContent(props) {
  const { username, selected } = props;
  return (
    <StyledTabContent>
      {selected === 'repos' && <RepoContent username={username} />}
      {selected === 'followers' && <FollowerContent username={username} />}
      {selected === 'followings' && <FollowingContent username={username} />}
    </StyledTabContent>
  );
}

export default UserContent;
