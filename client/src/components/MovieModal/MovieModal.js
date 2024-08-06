import { useEffect, useState } from "react";
import { Modal, ModalCloseButton, ModalContent, ModalOverlay } from "./MovieModalStyled";
import { IoCloseCircleOutline } from "react-icons/io5";

const MovieModal = ({show, onClose}) => {
    const [isCloseButtonVisible, setCloseButtonVisible] = useState(true);

    useEffect(() => {
        let timeout;

        const handleMouseMove = () => {
            setCloseButtonVisible(true);
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                setCloseButtonVisible(false);
            }, 2000);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            clearTimeout(timeout);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    if(!show) {
        return null
    }

    return(
        <>
            <ModalOverlay onClick={onClose} />
            <Modal>
                <ModalCloseButton 
                    onClick={onClose}
                    style={{ opacity: isCloseButtonVisible ? 1 : 0 }}
                >
                    <IoCloseCircleOutline/>
                </ModalCloseButton>
                <ModalContent>
                    <iframe src={'https://www.youtube.com/embed/VHfh39tDwzo?autoplay=1'} 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen    
                    />
                </ModalContent>
            </Modal>
        </>
    )
}

export default MovieModal;