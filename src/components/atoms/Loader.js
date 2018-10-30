import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Spinner from './Spinner';

const StyledLoading = styled.div`
height: 100%;
width: 100%;
z-index: 1000;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0,0,0,.6);
color: white;
display: flex;
display: -webkit-box;
display: -moz-box;
display: -ms-flexbox;
display: -webkit-flex;
flex-direction: column;
justify-content: center;
align-items: center;
-webkit-box-align: center;
-moz-box-align: center;
-ms-flex-align: center;
-webkit-align-items: center;
`;

function Loading(props) {
  const { message } = props;
  return (
    <StyledLoading>
      <Spinner />
      {message && <span>{message}</span>}
    </StyledLoading>
  );
}

function Loader(props) {
  const { children, loading, message } = props;
  return (
    <section style={{ position: 'relative' }}>
      {loading && <Loading message={message} />}
      {children}
    </section>
  );
}

Loading.propTypes = {
  message: PropTypes.string,
};

Loading.defaultProps = {
  message: 'Loading...',
};

Loader.propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool,
  message: PropTypes.string,
};

Loader.defaultProps = {
  children: null,
  loading: false,
  message: 'Loading...',
};

export default Loader;
