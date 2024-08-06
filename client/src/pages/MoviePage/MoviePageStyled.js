import styled, { keyframes } from "styled-components";
import theme from "../../styles/theme";

const fadeIn = keyframes`
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
`

const MoviePageContainer = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    animation: ${fadeIn} 0.2s ease-in-out;
    color: ${theme.colors.white};
    margin: 0 10%;
    width: 80%;
    text-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.5);

    @media (max-width: ${theme.breakpoints.mobile}) {
        margin: 0 7%;
        width: 86%;
    }

`;

const MovieTitle = styled.h1`
    font-family: ${theme.fonts.titles};
    font-weight: ${theme.fontWeights.normal};
    font-size: 3rem;
    text-align: center;
    padding: 2%;
    color: ${theme.colors.white};
    text-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.5);
`;


const MovieDetailsContainer = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media (max-width: ${theme.breakpoints.mobile}) {
        flex-direction: column;
    }

    @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet}) {
        align-items: center;
        gap: 5%;
    }

`;

const MovieImage = styled.img`
    width: 35%;
    box-shadow: 0 0 1.5rem black;

    
    @media (max-width: ${theme.breakpoints.mobile}) {
        margin: 7% 0;
        width: 100%;
    }

    @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet}) {
        margin: 7% 0;
        width: 50%;
        height: 30%;
    }
    
`;

const MovieDetails = styled.div`
    padding-top: 3%;
    width: 50%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: start;

    @media (max-width: ${theme.breakpoints.mobile}) {
        flex-direction: column-reverse;
        padding-top: 0%;
        width: 100%;
        
    }

    `

const TrailerContainer = styled.div`
    height: 30rem;
    width: 100%;
    margin-top: 3%;
    iframe {
        width: 100%;
        height: 100%;
        border-radius: 0.8vw;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        margin: 10%; 
        height: 15rem;      
    }

    @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet}) {
        margin: 1%; 
        height: 23rem; 
    }
`;

const MovieSynopsis = styled.div`
    margin: 3% 5% 5% 5%;
    text-align: center;
    background: ${theme.colors.black20}; 
    border: 0.01rem solid rgba(0, 0, 0, 0);
    border-radius: 0.8rem;
    box-shadow: 0 0.25rem 0.4rem rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    font-size: 1.1rem;
    width: 100%;
    padding: 0rem 3rem 3rem 3rem;

    h1{
        font-size: 2.3rem;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 1rem;   
        padding: 0rem 0.7rem 0.7rem 0.7rem;  
        margin: 0% 0% 10% 0%;
    }

    @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet}) {
        padding: 0rem 1.5rem 1.5rem 1.5rem;  
        margin: 6% 0% 10% 0%;
    }
`;


export {
    MoviePageContainer,
    MovieTitle,
    MovieImage,
    TrailerContainer,
    MovieSynopsis,
    MovieDetails,
    MovieDetailsContainer,
}