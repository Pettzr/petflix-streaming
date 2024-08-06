import styled from "styled-components";
import theme from "../../styles/theme";


const FooterContainer = styled.footer`
    display: flex;
    padding: 0 4vw;
    justify-content: space-between;
    align-items: center;
    align-self: end;
    background-color: ${theme.colors.grey};
    height: 14vh;

    img {
        border: white solid 1px;
        transition: box-shadow 0.2s, transform 0.2s;

        &:hover {
            transform: scale(1.05);
            box-shadow: 0 0 0 0.1rem white;
        }
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        height: auto;
        flex-direction: column;  
        padding: 1rem;

            img {
                width: 5rem;
                height: 5rem;
            }

            svg {
                width: 2rem;
                height: 2rem;
            }
    }

    @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet}) {
        height: auto;
        flex-direction: column;  
        padding: 1rem;

            img {
                width: 5rem;
                height: 5rem;
            }

            svg {
                width: 2rem;
                height: 2rem;
            }
    }
`

const FooterSection = styled.section`
    display: flex;
    gap: 1rem;

    @media (max-width: ${theme.breakpoints.mobile}) {
        gap: 3.5rem;
    }

    @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet}) {
        gap: 3.5rem;    
    }
`

const FooterUl = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 0.8rem;
`

const FooterLi = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: start;
    color: ${theme.colors.white};
    font-size: 1rem;
`

const DivLinks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    transition: color 0.2s, transform 0.2s;

    &:hover{
        color: ${({$colorHover}) => ( $colorHover ? $colorHover : theme.colors.black )};
        transform: scale(1.05);
    }


`

const CopyRight = styled.h3`
    align-self: center;
    font-size: 0.8rem;
    font-weight: 200;
    color: ${theme.colors.white};
    
    @media (max-width: ${theme.breakpoints.mobile}) {
        margin-top: 1rem;
        text-align: center;
        font-size: 0.7rem;
    }

    
    @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet}) {
        margin-top: 1rem;
        text-align: center;
        font-size: 0.7rem;
    }
`

export {
    FooterContainer,
    FooterSection,
    FooterUl,
    FooterLi,
    DivLinks,
    CopyRight,
}