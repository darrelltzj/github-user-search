import styled from 'styled-components';

export default styled.button`
background-color: ${props => props.theme.greyDark};
color: ${props => props.theme.white};
width: 100%;
height: 50px;
box-sizing: border-box;
border-radius: 8px;
font-size: 18px;
cursor: pointer;
`;
