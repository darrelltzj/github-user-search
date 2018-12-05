import styled from 'styled-components';

export default styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
flex-wrap: wrap;
align-items: ${props => (props.alignItems || 'start')};
width: 100%;
${props => (props.padding ? `padding: ${props.padding};` : '')}
`;
