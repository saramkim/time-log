import { createGlobalStyle } from 'styled-components';
// import reset from 'styled-reset';

export default createGlobalStyle`

body {
	background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.color};
}

button {
    box-shadow: ${(props) => props.theme.boxShadow};
    border: ${(props) => props.theme.border};
}

button:hover {
    box-shadow: ${(props) => props.theme.boxShadowInset};
}

`;
