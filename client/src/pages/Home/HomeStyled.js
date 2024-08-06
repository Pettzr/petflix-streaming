import styled from "styled-components";
import theme from "../../styles/theme"

const HomeContainer = styled.div`
    margin-bottom: 3%;

    @media (max-width: ${theme.breakpoints.mobile}) {
        margin-bottom: 10%;
    }

    @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet}) {
        margin-bottom: 5%;
    }
`

const HomeSection = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(10vw, 1fr));
    gap: 1vw;
    padding: 2vw;
    justify-content: center;

    @media (max-width: ${theme.breakpoints.mobile}) {
        grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
        gap: 0.8rem;
        padding: 3%;
        font-size: 0.85rem;
    }

    @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet}) {
        grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
        gap: 1rem;
        padding: 3%;
    }

`

const HomeTitle = styled.h1`
    margin-left: 3%;
    margin-bottom: 1%;
    font-size: 2rem;
    font-family: ${theme.fonts.titles};
    font-weight: ${theme.fontWeights.normal};
    color: ${theme.colors.white};
    text-shadow: 0.2rem 0.2rem 0.3rem rgba(0, 0, 0, 0.5);

    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 2.5rem;
        margin-bottom: 4%;
    }

    @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet}) {
        font-size: 2.5rem;    
        margin-bottom: 0%;
    }
`;


export {
    HomeSection,
    HomeContainer,
    HomeTitle,
}