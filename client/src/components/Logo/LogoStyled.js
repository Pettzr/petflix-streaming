import styled from "styled-components";
import theme from "../../styles/theme";

const LogoContainer = styled.div`
    display: flex;
    width: auto;
`

const LogoImg = styled.img`
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;

    @media (max-width: ${theme.breakpoints.mobile}) {
        width: 5rem;
        height: 5rem;
    }

    @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet}) {
        width: 7.5rem;
        height: 7.5rem;
    }
`

const LogoNameContainer = styled.div`
    display: flex;
    align-items:center;
`

const LogoName = styled.h1`
    font-family: ${theme.fonts.logo};
    font-weight: ${theme.fontWeights.bold};
    font-size: 2.5rem;
    color: ${(props) => props.color || 'black'};

    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 250%;
    };

    @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet}) {
        font-size: 350%;
    };
`

export {
    LogoContainer,
    LogoImg,
    LogoNameContainer,
    LogoName,
}