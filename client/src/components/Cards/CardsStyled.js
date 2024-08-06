import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../styles/theme"

const fadeIn = keyframes`
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
`;

const ImageCard = styled.img`
    width: 100%;
    height: 100%;
`


const CardsContainer = styled.div`
    position: relative;
    max-width: 100%;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    animation: ${fadeIn} 0.2s ease-in-out;
    box-shadow: 0.5vw 0.5vw 0.8vw rgba(41, 46, 51, 0.7);
    margin-top: 0.1%;
  
`

const ImageContainer = styled.div`
    transition: transform 0.3s ease, filter 0.3s ease;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 0.1vh solid rgba(27, 43, 57, 0.0);
        background-color: rgba(0, 0, 0, 0);
        z-index: 1;
        transition: background-color 0.3s, border 0.5s;
    }
        
    ${CardsContainer}:hover &::before {
        border: 0.1vh solid rgba(27, 43, 57, 0.5);
        overflow:hidden;
        background-color: ${theme.colors.black75};
    }

    ${CardsContainer}:hover & {
        transform: scale(1.1);  
    }


`;

const PlayIcon = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.8em;
    color: ${theme.colors.white};
    opacity: 0;
    transition: opacity 0.6s ease;
    z-index: 2;

    ${CardsContainer}:hover & {
        opacity: 1;
    }
`;

const Title = styled.div`
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${theme.colors.white};
    opacity: 0;
    transition: opacity 0.6s ease;
    z-index: 3;
    font-size: 1em;
    text-align: center;
    max-width: 90%;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    white-space: normal;

    ${CardsContainer}:hover & {
        opacity: 1;
    }
`;

const CardLink = styled(Link)`
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const RemoveButton = styled.button`
    position: absolute;
    top: 0px;
    right: 0px;
    background: transparent;
    border: none;
    color: ${theme.colors.white};
    font-size: 1em;
    cursor: pointer;
    z-index: 1000;
    transition: transform 0.3s ease, color 0.3s ease;

    ${CardsContainer}:hover & {
        transform: scale(1.5);
    }

    &:hover {
        color: ${theme.colors.red};
    }
`;

export {
    ImageCard,
    CardsContainer,
    ImageContainer,
    PlayIcon,
    Title,
    CardLink,
    RemoveButton,
}