import { useParams } from "react-router-dom"
import { useCallback, useEffect, useState } from "react";
import movieService from "../../services/movieService";
import userService from "../../services/userService";
import { MovieDetails, MovieDetailsContainer, MovieImage, MoviePageContainer, MovieSynopsis, MovieTitle, TrailerContainer } from "./MoviePageStyled";
import InfoMoviesPage from "../../components/InfoMoviesPage/InfoMoviesPage";
import ButtonsMoviesPage from "../../components/ButtonsMoviesPage/ButtonsMoviesPage";
import useFetch from "../../hooks/useFetch";
import { toast } from "react-toastify";
import PageNotFound from "../PageNotFound/PageNotFound";
import MovieModal from "../../components/MovieModal/MovieModal";

const MoviePage = () => {
    const {slug} = useParams();
    const [isIncludedFavorite, setIsIncludedFavorite] = useState(false)
    const [isIncludedToWatch, setIsIncludedToWatch] = useState(false)
    const [isIncludedHistory, setIsIncludedHistory] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    
    const { data: movie, loading, error} = useFetch(movieService.getMovieByTitle, slug)

    const checkMovieInUserLists = useCallback(async (movieId) => {
        try{
            const response = await userService.checkMovieInUserLists(movieId)
            setIsIncludedFavorite(response.data.isIncludedFavorite)
            setIsIncludedToWatch(response.data.isIncludedToWatch)
            setIsIncludedHistory(response.data.isIncludedHistory)
        } catch (error){
            console.error('Nenhum filme encontrado', error)
        }
    },[])

    useEffect(() => {
        if(movie){
            checkMovieInUserLists(movie._id)
        }
    }, [movie, checkMovieInUserLists])

    const handleClickAddRemoveMovieToWatch = async () => {
        try {
            await userService.addRemoveMovieToWatch({movieId: movie._id})
            if (isIncludedToWatch) {
                toast.success('Filme removido do Assistir mais tarde')
            } else {
                toast.success('Filme adicionado ao Assistir mais tarde')
            }
            setIsIncludedToWatch(!isIncludedToWatch)
        } catch (error) {
            toast.error('Faça login para usar esta função');
            console.log("Erro ao salvar filme", error)
        }
    }

    const handleClickAddRemoveMovieFavorites = async() => {
        try {
            await userService.addRemoveMovieFavorites({movieId: movie._id})
            if (isIncludedFavorite) {
                toast.success('Filme removido dos Favoritos')
            } else {
                toast.success('Filme adicionado aos Favoritos')
            }
            setIsIncludedFavorite(!isIncludedFavorite)
        } catch (error) {
            toast.error('Faça login para usar esta função');
            console.error("Erro ao salvar filme", error)
        }
    }

    const handleModal = async () => {
        try {
            if(!isModalOpen) {
                if(isIncludedHistory){
                    await userService.addRemoveMovieHistory({ movieId: movie._id})
                    await userService.addRemoveMovieHistory({ movieId: movie._id})
                } else {
                    await userService.addRemoveMovieHistory({ movieId: movie._id})
                }
                setIsModalOpen(true);
                toast.info('Esta é apenas uma demonstração da função "Assistir Filme", já que não possuo os direitos autorais para a reprodução do filme. Para mais informações, consulte o arquivo ReadMe do projeto.', {autoClose: 10000});
            } else {
                setIsModalOpen(false)
            }
        } catch (error) {
            toast.error('Faça login para usar esta função');
            console.error("Erro ao reproduzir filme", error)
            setIsModalOpen(false)
        }
    }
    
    if (error) {
        console.error('Erro ao buscar filmes', error);
    }

    return(
    loading ? null : (
    !movie ? <PageNotFound/> :
    <MoviePageContainer>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieDetailsContainer>
            <MovieImage src={movie.image}/>
            <MovieDetails>
                <InfoMoviesPage movie={movie}/>
                <ButtonsMoviesPage
                        isIncludedFavorite={isIncludedFavorite}
                        handleClickAddRemoveMovieFavorites={handleClickAddRemoveMovieFavorites}
                        isIncludedToWatch={isIncludedToWatch}
                        handleClickAddRemoveMovieToWatch={handleClickAddRemoveMovieToWatch}
                        handleModal={handleModal}
                />
            </MovieDetails>
        </MovieDetailsContainer>
        <TrailerContainer>
            <iframe src={movie.trailerURL} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </TrailerContainer>
        <MovieModal show={isModalOpen} onClose={handleModal} />
        <MovieSynopsis>
            <MovieTitle>Sinopse</MovieTitle>    
            {movie.synopsis}
        </MovieSynopsis>
    </MoviePageContainer>
        )
    )   
}

export default MoviePage;