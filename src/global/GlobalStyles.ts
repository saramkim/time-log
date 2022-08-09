import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`

* {
    ${reset};
}

body {
	background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.color};
    transition: ${(props) => props.theme.transition};
}

`;
