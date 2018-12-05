import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const Head = ({
  title,
  type,
  image,
  pathname,
  description,
}) => (
  <Helmet>
    {console.log(title)}
    <title>{title}</title>
    <meta property="og: title" content={title} />
    <meta property="og:type" content={type} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={`https://the-github-user-search.herokuapp.com${pathname}`} />
    <meta property="og:description" content={description} />
    <meta name="Description" content={description} />
  </Helmet>
);

Head.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  description: PropTypes.string,
};

Head.defaultProps = {
  title: 'Github User Search',
  type: 'website',
  image: 'https://assets-cdn.github.com/images/modules/open_graph/github-logo.png',
  pathname: '',
  description: 'Search for Github Users through this App!',
};

export default Head;
