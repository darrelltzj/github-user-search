import styled from 'styled-components';

export default styled.a`
text-decoration: none;
color: ${props => props.color};
${props => (props.fontSize ? `font-size: ${props.fontSize};` : '')}
`;
