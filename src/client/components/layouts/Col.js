import styled from 'styled-components';

function validate(size) {
  if (Number.isNaN(size)) { return null; }
  if (size < 0) { return 0; }
  if (size > 12) { return 12; }
  return size;
}

function flexSize({ props = {}, size } = {}) {
  const {
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
  } = props;

  switch (size) {
    case 'xs':
      return validate(xs) || 12;
    case 'sm':
      return validate(sm) || validate(xs) || 12;
    case 'md':
      return validate(md) || validate(sm) || validate(xs) || 12;
    case 'lg':
      return validate(lg) || validate(md) || validate(sm) || validate(xs) || 12;
    case 'xl':
      return validate(xl) || validate(lg) || validate(md) || validate(sm) || validate(xs) || 12;
    case 'xxl':
      return validate(xxl)
      || validate(xl) || validate(lg) || validate(md) || validate(sm) || validate(xs) || 12;
    default:
      return 12;
  }
}

export default styled.div`
@media (max-width: 576px) {
  flex: ${props => flexSize({
    props,
    size: 'xs',
  })}
}

@media (max-width: 768px) {
  flex: ${props => flexSize({
    props,
    size: 'sm',
  })}
}

@media (max-width: 992px) {
  flex: ${props => flexSize({
    props,
    size: 'md',
  })}
}

@media (max-width: 1200px) {
  flex: ${props => flexSize({
    props,
    size: 'lg',
  })}
}

@media (max-width: 1600px) {
  flex: ${props => flexSize({
    props,
    size: 'xl',
  })}
}

flex: ${props => flexSize({
    props,
    size: 'xxl',
  })}
`;
