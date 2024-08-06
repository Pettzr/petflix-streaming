import styled from "styled-components"
import theme from "../../styles/theme"

const ButtonsMovieContainer = styled.div`
    display:flex;
    flex-direction: column;
    margin: 5% 0 10% 0;
    justify-content: center;
    align-items: center;
`

const ButtonsMovie = styled.div`
    display:flex;
    gap: 1.8rem 3rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;

`

const AddToWatchLater = styled.button`
    display: flex;
    background-color: ${theme.colors.green};
    font-size: 0.9rem;
    width: 62%;
    align-items: center;
    justify-content: center;
    border-radius: 3rem;
    padding: 1.5%;
    gap: 5%;
    color: white;   
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); 
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
    
    &:hover {
        background-color: ${theme.colors.lightGreen};
        transform: scale(1.05);
    }


    @media (max-width: ${theme.breakpoints.mobile}) {
        width: 95%;
        gap: 2%;
        padding: 2.2%;
    }

    @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet}) {
        width: 95%;
        gap: 2%;
    }
`

const AddToFavorites = styled.button`
    display: flex;
    padding: 1.2%;
    border: solid 1px ${theme.colors.white};
    border-radius: 100%;
    color: ${theme.colors.white};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    transition: color 0.3s ease, transform 0.3s ease;
    
    &:hover {
        color: ${theme.colors.darkRed};
        transform: scale(1.2);
    }
`

const PlayMovie = styled.button`
    display: flex;
    background-color: ${theme.colors.orange};
    font-size: 0.9rem;
    width: 42%;
    align-items: center;
    border-radius: 3rem;
    padding: 1.5%;
    gap: 1rem;
    color: white;   
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); 
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
    justify-content: center;
    
    &:hover {
        background-color: ${theme.colors.darkRed};
        transform: scale(1.05);
    }


    @media (max-width: ${theme.breakpoints.mobile}) {
        width: 55%;
        padding: 2.2%;
    }

    @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet}) {
        width: 64%;
    }
`

export {
    ButtonsMovieContainer,
    ButtonsMovie,
    AddToWatchLater,
    AddToFavorites,
    PlayMovie,
}