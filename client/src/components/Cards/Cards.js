import { CardsContainer, ImageCard, ImageContainer, PlayIcon, RemoveButton, Title } from "./CardsStyled";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";



const Cards = ({title, img, to, state, onRemove, isProfilePage }) => {

    return(
    <CardsContainer>
        <Link to={to} state={state}>
            <ImageContainer>   
                <ImageCard src={img} />
                <PlayIcon>
                    <FaPlay />
                </PlayIcon>
                <Title>{title}</Title>
            </ImageContainer>
        </Link>
        {isProfilePage && (
            <RemoveButton onClick={onRemove}>
                <IoMdCloseCircle />
            </RemoveButton>
        )}
    </CardsContainer>
    )
}

export default Cards;