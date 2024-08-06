import styled from "styled-components";
import theme from "../../styles/theme";

const SearchBarContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: ${theme.breakpoints.mobile}) {
        margin: 2%;
    }

    @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet}) {
       margin: 2%;
    }
`

const SearchDiv = styled.div`
    display: flex;
    width: 50%;
    margin: 2%;
    justify-content: center;
    align-items: center;

    
    @media (max-width: ${theme.breakpoints.mobile}) {
        width: 80%;
        margin: 5%;
    }

    @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet}) {
        width: 80%;
        margin: 5%;
    }
`

const InputSearch = styled.input`
    width: 100%;
    font-size: 1.2rem;
    border-radius: 2rem;
    padding: 0.7% 4%;
    border: 1px solid ${theme.colors.lightGrey};
    border-radius: 1rem;
    outline: none;
    transition: border-color 0.3s;

    &:focus {
        border-color: ${theme.colors.orange};
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        padding: 2% 8%;
    }

    @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet}) {
      
    }
`
const ButtonSearch = styled.button`
    margin:  0 0 0 2.4%;
    width: 2.6rem;
    height: 2.6rem;
    padding: 1%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    border: 0.1rem solid ${theme.colors.white};
    border-radius: 50%;
    transition: 0.2s ease;
    background-color: ${theme.colors.black20};

    &:hover{
        color: ${theme.colors.orange};
        border: 0.1rem solid ${theme.colors.orange};
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        padding: 2.5%;
    }

    @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet}) {
        padding: 1.5%;
    }
    
`


export {
    SearchBarContainer,
    SearchDiv,
    InputSearch,
    ButtonSearch,
}