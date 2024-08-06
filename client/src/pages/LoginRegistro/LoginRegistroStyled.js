import styled from "styled-components";
import theme from "../../styles/theme";

const LogRegContainer = styled.div`
    width: 100vw;
    height: 100vh;
    padding-top: 12vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${theme.background.loginRegBackground};
    position: relative;
`

const ToggleButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
`;

const ToggleButton = styled.button`
    background-color: ${(props) => (props.$active ? theme.colors.grey : theme.colors.white )};
    color: ${(props) => (props.$active ? theme.colors.white : theme.colors.black)};
    border: none;
    padding: 0.7rem 1.4rem;
    cursor: pointer;
    border-radius: 0.2rem 0.2rem 0 0;
    font-size: 1rem;
    transition: background-color 0.3s, color 0.3s;
    position: relative;
    z-index: ${(props) => (props.$active ? '2' : '1')};

    &:hover {
        background-color: ${(props) => (props.$active ? theme.colors.lightOrange : theme.colors.lightGrey)};
    }
    
`;

const PasswordRequirements = styled.div`
    text-align: center;
    font-size: 1rem;
    position: absolute;
    top: 25%;
    right: 4%;
    width: 25%;
    background-color: ${theme.colors.white};
    padding: 1%;
    box-shadow: 0 0 0.8vw rgba(0, 0, 0, 0.1);
    border-radius: 0.8rem;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease-in-out, visibility 0.2s ease-in-out;

    &.fade-in {
        opacity: 1;
        visibility: visible;
    }

    &.fade-out {
        opacity: 0;
        visibility: hidden;
    }

    
    @media (max-width: ${theme.breakpoints.mobile}) {
        position: relative;
        top: 1%;
        left: 0%;
        width: 94%;
        font-size: 0.9rem;
        
    }

    @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet}) {
        position: relative;
        top: 1%;
        left: 0%;
        width: 70%;
        font-size: 0.9rem;
    }
    
`;

const PasswordUl = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    list-style: none;
    padding: 1%;
    font-size: 0.9rem;

    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 0.7rem;
    }
`


export{
    LogRegContainer,
    ToggleButtonContainer,
    ToggleButton,
    PasswordRequirements,
    PasswordUl,
}