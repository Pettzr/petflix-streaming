import styled from "styled-components";
import theme from "../../styles/theme";


const MovieListContainer = styled.section`
    display: flex;
    flex-direction: column;
    position: relative;
`

const MoviesRowContainer = styled.div`
    overflow: hidden;
    max-height: ${props => props.$showAll ? props.$maxHeight : "25em"};
    transition: max-height 0.5s ease-in-out;
    display: grid;
    width: 100%;
    height: auto;
    grid-template-columns: repeat(auto-fill, minmax(12%, 1fr));
    gap: 1.1em;
    padding: 0.8em 1.9em;
    padding-bottom: 5%;
    position: relative;

    @media (max-width: ${theme.breakpoints.mobile}) {
        grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
        max-height: ${props => props.$showAll ? props.$maxHeight : "25rem"};
        gap: 1rem;
        padding: 3%;
        padding-bottom: 20%;
    }

    @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet}) {
        grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
        max-height: ${props => props.$showAll ? props.$maxHeight : "38rem"};
        gap: 1.4rem;
        padding: 4%;
        padding-bottom: 10%;
    }

`

const GradientOverlay = styled.div`
    position: absolute;
    bottom: 0%;
    left: 0;
    width: 100%;
    height: 20%; 
    border-radius: 0 0 0.8em 0.8em;
    background: linear-gradient(to bottom, ${theme.colors.gradient}, ${theme.colors.gradient90});
    pointer-events: none; 
    opacity: ${props => (props.$showAll ? 0 : 1)};
    transition: opacity 0.2s ease-in-out;
    z-index: 1;
`;

const ShowMoreButton = styled.button`
    position: absolute;
    bottom: 0px; 
    width: 100%;
    height: 3.5em;
    padding: 1% 2%;
    cursor: pointer;
    background-color: ${theme.colors.blue70};
    transition: background-color 0.2s, bottom 0.5s ease-in-out;
    color: ${theme.colors.white};
    border: none;
    border-radius: 0 0 1em 1em;
    font-size: 0.85em;
    z-index: 2;

    &:hover {
        background-color: ${theme.colors.lightBlue};
    }
`

export {
    MovieListContainer,
    MoviesRowContainer,
    GradientOverlay,
    ShowMoreButton,
}