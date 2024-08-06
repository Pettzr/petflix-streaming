import styled from "styled-components";
import theme from "../../styles/theme";
import { IoPersonOutline } from "react-icons/io5";
import { BsHouse } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { CiLogout } from "react-icons/ci";


const ContainerHeader = styled.header`
    width: 100vw;
    height: auto;
    background-color: ${theme.colors.grey};
    display: flex;
    align-items: center;
    padding-left: 2vw;

    @media (max-width: ${theme.breakpoints.mobile}) {
        height: auto;
    }

    @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet}) {
        height: auto;
    }

`;

const NavContainer = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    color: ${theme.colors.white};
`;

const HeaderUl = styled.ul`
    display: flex;
    gap: 4vw;
    margin-left: 3%;
    width: auto;
    height: 100%;
    flex-grow: 1;
`;

const HeaderLi = styled.li`
    transition: transform 0.2s;
    
    &:hover{
        transform: scale(1.05);
    }
`

const DivLinks = styled.div`
    display: flex;
    justify-content: center;
    align-items: end;
    gap:1vw;
    font-size: 0.9em;
    transition: color 0.2s ease;

    &:hover{
        color: ${theme.colors.orange};
    }
`

const LoginDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 1vw;
    cursor:pointer;
    transition: color 0.2s ease, transform 0.2s;

    &:hover{
        color: ${theme.colors.orange};
        transform: scale(1.05);
    }
`;

const LoginText = styled.h1`
    font-weight: 400;
    font-size: 1.1rem;
    color: inherit;
    margin-right: 4vw;  
`;

const HamburgerMenu = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const IconPerson = styled(IoPersonOutline)`
    font-size: 150%;

    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 200%;
    }

    @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet}) {
        font-size: 200%;
    }
`

const HouseMenu = styled(BsHouse)`
    font-size: 150%;

    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 200%;
    }

    @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet}) {
        font-size: 200%;
    }
`

const PersonLogin = styled(GoPerson)`
   font-size: 2.5rem;

    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 200%;
    }
    
    @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet}) {
        font-size: 200%;
    }
`

const DoorLogout = styled(CiLogout)`
   font-size: 2.5rem;
    

    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 200%;
    }

    
    @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet}) {
        font-size: 200%;
    }
`

export { 
    ContainerHeader,
    NavContainer,
    HeaderUl,
    HeaderLi,
    DivLinks,
    LoginDiv,
    LoginText,
    HamburgerMenu,
    IconPerson,
    HouseMenu,
    PersonLogin,
    DoorLogout,
 }
