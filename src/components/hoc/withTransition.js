import React from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { CSSTransitionGroup } from 'react-transition-group';

export default (WrappedComponent) => {
  const hocComponent = props => (
    <CSSTransitionGroup
      transitionName="page"
      transitionAppear
      transitionAppearTimeout={600}
      transitionEnterTimeout={600}
      transitionLeaveTimeout={200}
    >
      <WrappedComponent {...props} />
    </CSSTransitionGroup>
  );
  return hocComponent;
};
