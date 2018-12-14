import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import serialize from 'serialize-javascript';

const Head = ({
  title,
  type,
  image,
  pathname,
  description,
}) => (
  <Helmet>
    <title>{serialize(title)}</title>
    <meta property="og: title" content={serialize(title)} />
    <meta property="og:type" content={serialize(type)} />
    <meta property="og:image" content={serialize(image)} />
    <meta property="og:url" content={`https://the-github-user-search.herokuapp.com${serialize(pathname)}`} />
    <meta property="og:description" content={serialize(description)} />
    <meta name="Description" content={serialize(description)} />
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
