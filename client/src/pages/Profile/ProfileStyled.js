import styled from "styled-components"
import theme from "../../styles/theme";

const ProfileContainer = styled.div`
    width: 100%;
    min-height: 100%;
`;

const ProfileSection = styled.section`
    margin: 2% 5%;
    display: flex;
    flex-direction: column;

    @media (max-width: ${theme.breakpoints.mobile}) {
        margin: 4% 5%;
    }

    @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet}) {
        margin: 3% 4%;
    }
`

const MovieWrapper = styled.div`
    margin-top: 3%;

    text-align: center;
    background: ${theme.colors.white20}; 
    border: 0.01em solid rgba(0, 0, 0, 0.4);
    border-radius: 0.8em;
    box-shadow: 0 0.25em 0.3em rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(0.6em);
    -webkit-backdrop-filter: blur(0.6em);
    
`;

const Title = styled.h1`
    padding: 2%;
    font-family: ${theme.fonts.titles};
    font-weight: ${theme.fontWeights.normal};
    font-size: 2em;
    color: ${theme.colors.white};
    text-shadow: 0.1em 0.1em 0.15em rgba(0, 0, 0, 0.5);
`;

const NoMoviesMessage = styled.h1`
    padding: 0.5%;
    font-size: 1.2em;
    color: ${theme.colors.grey};
`;

export {
    ProfileContainer,
    ProfileSection,
    MovieWrapper,
    Title,
    NoMoviesMessage,
}