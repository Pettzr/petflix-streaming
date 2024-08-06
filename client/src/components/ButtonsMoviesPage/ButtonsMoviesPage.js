import { AddToFavorites, AddToWatchLater, ButtonsMovie, ButtonsMovieContainer, PlayMovie } from "./ButtonsMoviesPageStyled";
import { TbClockPlus, TbClockX } from "react-icons/tb";
import { PiHeart, PiHeartFill } from "react-icons/pi";
import { FaRegCirclePlay } from "react-icons/fa6";
import theme from "../../styles/theme";
import useDeviceType from "../../hooks/useDeviceType";

const ButtonsMoviesPage = ({isIncludedToWatch, handleClickAddRemoveMovieToWatch, isIncludedFavorite, handleClickAddRemoveMovieFavorites, handleModal}) => {
    const deviceType = useDeviceType()

    let size;
    deviceType === 'tablet' ?
    size = '2.5rem':
    deviceType === 'mobile' ?
    size = '2.5rem':
    size = '2.5rem';

    return (
        <ButtonsMovieContainer>
            <ButtonsMovie>
                {isIncludedToWatch ? 
                <AddToWatchLater onClick={handleClickAddRemoveMovieToWatch}>
                        <TbClockX fontSize={size}/> Remover do Assistir mais tarde
                </AddToWatchLater>
                    :
                <AddToWatchLater onClick={handleClickAddRemoveMovieToWatch}>
                    <TbClockPlus fontSize={size}/> Adicionar ao Assistir mais tarde
                </AddToWatchLater>
                }
                <AddToFavorites onClick={handleClickAddRemoveMovieFavorites}>
                    {isIncludedFavorite ? <PiHeartFill fontSize={size} color={theme.colors.red} /> : <PiHeart fontSize={size} />} 
                </AddToFavorites>
                <PlayMovie onClick={handleModal}>
                    <FaRegCirclePlay fontSize={size} /> Assistir Filme
                </PlayMovie>
            </ButtonsMovie>
        </ButtonsMovieContainer>
    )
}

export default ButtonsMoviesPage;