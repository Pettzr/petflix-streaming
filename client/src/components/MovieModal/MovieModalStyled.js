import styled from 'styled-components';
import theme from '../../styles/theme';

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${theme.colors.black75};
    z-index: 1000;
`;

const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1001;
    max-width: 75vw;
    width: 100%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    &:hover {
        button {
            opacity: 1;
        }
    }
`;

const ModalContent = styled.div`
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    position: relative;

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

`;

const ModalCloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    cursor: pointer;
    z-index: 1002;
    color: ${theme.colors.white};
    font-size: 5vh;
    opacity: 0;
    transition: opacity 0.3s ease;
`;

export {
    ModalOverlay,
    Modal,
    ModalContent,
    ModalCloseButton,
}