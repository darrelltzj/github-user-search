import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHomeSearchItem = styled.div`
  display: 'block';
  border-bottom: 1px solid ${props => props.theme.grey};
  padding: 10px;

  :hover {
    background: rgba(0, 0, 0, 0.3);
  }
`;

const HomeSearchItem = (props) => {
  const { user = {} } = props;
  return (
    <Link to={`/users/${user.login}`}>
      <StyledHomeSearchItem>
        {user.login}
      </StyledHomeSearchItem>
    </Link>
  );
};

HomeSearchItem.propTypes = {
  user: PropTypes.shape({}),
};

HomeSearchItem.defaultProps = {
  user: {},
};

export default HomeSearchItem;
