import styled from 'styled-components';

export default styled.span`
color: ${props => props.color};
${props => (props.fontSize ? `font-size: ${props.fontSize};` : '')}
${props => (props.margin ? `margin: ${props.margin};` : '')}
`;
