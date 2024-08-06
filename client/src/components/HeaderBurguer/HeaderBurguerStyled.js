import styled from 'styled-components';
import { FaBars } from "react-icons/fa";
import theme from '../../styles/theme';

const HeaderIcon = styled.div`
    width: 100%;
    padding: 1.1em;
    display: flex;
    justify-content: end;
`

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

        svg {
            border: 1px solid white;
            border-radius: 1em;
            padding: 3px;
        }
`;

const MenuLinks = styled.ul`
    list-style: none;
    text-align: center;
    margin: 1rem 0;

`;

const MenuItem = styled.li`
    display: flex;
    margin: 1rem 0;
    gap: 1em;
`;

const DivLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;
`;

const LoginText = styled.span`

`;

const MenuBars = styled(FaBars)`

    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 200%;
    }

    @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet}) {
        font-size: 300%;
    }
`

export {
    HeaderIcon,
    HamburgerMenu,
    MenuLinks,
    MenuItem,
    DivLinks,
    LoginText,
    MenuBars,   
}