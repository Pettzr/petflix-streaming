import styled from "styled-components";
import theme from "../../styles/theme";

const InfoWrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-self: center;

    text-align: center;
    background: rgba(0, 0, 0, 0.15); 
    border: 0.01rem solid rgba(0, 0, 0, 0.2);
    border-radius: 0.7rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    width: 100%;
    height: auto;
    padding: 4%;
    gap: 0.7rem;

    @media (max-width: ${theme.breakpoints.mobile}) {
        gap: 0.7rem;
    }

    @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet}) {
        gap: 0.3rem;
    }
`

const MovieInfo = styled.h2`
    font-weight: 400;
    font-size: 1.2rem;
    text-align: start;

    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 1rem;   
    }

    @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet}) {
        font-size: 1rem; 
    }
`;


export {
    InfoWrapper,
    MovieInfo
}