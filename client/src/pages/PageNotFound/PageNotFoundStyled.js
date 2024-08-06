import styled from "styled-components"
import theme from "../../styles/theme"

const PageNotFoundMessage = styled.h1`
    font-size: 3.5vw;
    text-align: center;
    margin: 23vh 0;
    color: ${theme.colors.white};
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`

export{
    PageNotFoundMessage
}