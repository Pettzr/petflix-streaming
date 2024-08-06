import styled from 'styled-components';
import theme from '../../styles/theme';

const SearchButtonsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;

    @media (max-width: ${theme.breakpoints.mobile}) {
        flex-direction: column;
    }

    @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet}) {
        flex-direction: column;
    }
`

const GenreButton = styled.button`
    display: flex;
    width: 10rem;
    max-width: 10%;
    height: 2.8rem;
    font-size: 1rem;
    background-color: ${({ $isActive }) => ($isActive ? theme.colors.salmon : theme.colors.orange)};
    border-radius: 0.7rem;
    transition: background-color 0.2s;
    color: ${theme.colors.white};
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: ${({ $isActive }) => ($isActive ? theme.colors.salmon : theme.colors.lightOrange)};
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        width: 15rem;
        max-width: 100%;
        height: 2.4rem;
    }

    @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet}) {
        width: 20rem;
        max-width: 100%;
        height: 2.4rem;
    }
`

const Overlay = styled.div`
    display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${theme.colors.black75};
    z-index: 9;
`;

const Drawer = styled.div`
    display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
    width: 100%;
    height: 100%;
    top: 27%;
    left: 0%;
    flex-direction: column;
    position: absolute;
    z-index: 10;
    padding-top: 0.6rem;

`;


export {
    SearchButtonsContainer,
    GenreButton,
    Overlay,
    Drawer,
}
