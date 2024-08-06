import { useState } from "react";
import movieService from "../../services/movieService";
import { MovieWrapper, NoMoviesMessage, ProfileContainer, ProfileSection, Title } from "./ProfileStyled";
import MovieList from "../../components/MovieList/MovieList";
import useFetch from "../../hooks/useFetch";
import useAuthRedirect from "../../hooks/useAuthRedirect";
import userService from "../../services/userService";
import { toast } from "react-toastify";

const Profile = () => {
    useAuthRedirect(false, '/login-registro', 'Você precisa estar logado para acessar o perfil!') 

    const [showAll, setShowAll] = useState({
        moviesToWatch: false,
        favoriteMovies: false,
        moviesHistory: false
    });

    const { data: moviesToWatch, setData: setMoviesToWatch, loading: loadingToWatch, error: errorToWatch } = useFetch(movieService.getUserMoviesToWatch);
    const { data: favoriteMovies, setData: setFavoriteMovies, loading: loadingFavorites, error: errorFavorites } = useFetch(movieService.getUserFavoriteMovies);
    const { data: moviesHistory, setData: setMoviesHistory, loading: loadingHistory, error: errorHistory } = useFetch(movieService.getUserMovieHistory);

    if (errorToWatch || errorFavorites || errorHistory) {
        console.error('Erro ao buscar filmes', errorToWatch || errorFavorites || errorHistory );
    }

    let loading = loadingToWatch || loadingFavorites || loadingHistory
   
    const toggleShowAll = (listType) => {
        setShowAll((prevState) => ({
            ...prevState,
            [listType]: !prevState[listType]
        }));
    };

    const handleRemoveMovie = async (movieId, listType) => {
        try {
            if (listType === 'toWatch') {
                await userService.addRemoveMovieToWatch({movieId})
                setMoviesToWatch(prevMovies => prevMovies.filter(movie => movie._id !== movieId));
                toast.success('Filme removido da lista "Assistir Mais Tarde"');
            } else if (listType === 'favorites') {
                await userService.addRemoveMovieFavorites({movieId});
                setFavoriteMovies(prevMovies => prevMovies.filter(movie => movie._id !== movieId));
                toast.success('Filme removido da lista "Favoritos"');
            } else if (listType === 'history') {
                await userService.addRemoveMovieHistory({movieId});
                setMoviesHistory(prevMovies => prevMovies.filter(movie => movie._id !== movieId));
                toast.success('Filme removido da lista "Histórico"');
            }
        } catch (error) {
            toast.error('Erro ao remover filme da lista');
            console.error('Erro ao remover filme da lista', error);
        }
    }

    return( 
        <ProfileContainer>
            <ProfileSection>
                { loading ? null : 
                    <>
                        <MovieWrapper>
                            <Title>Assistir Mais Tarde</Title>
                            { moviesToWatch && moviesToWatch.length > 0 ? 
                            <MovieList
                                movies={moviesToWatch}
                                showAll={showAll.moviesToWatch}
                                toggleShowAll={() => toggleShowAll('moviesToWatch')}
                                onRemoveMovie={(movieId) => handleRemoveMovie(movieId, 'toWatch')}
                                isProfilePage={true}
                            /> : <NoMoviesMessage>Nenhum filme</NoMoviesMessage>
                            }
                        </MovieWrapper>
                        <MovieWrapper>
                            <Title>Favoritos</Title>
                            {favoriteMovies && favoriteMovies.length > 0 ? 
                            <MovieList
                                movies={favoriteMovies}
                                showAll={showAll.favoriteMovies}
                                toggleShowAll={() => toggleShowAll('favoriteMovies')}
                                onRemoveMovie={(movieId) => handleRemoveMovie(movieId, 'favorites')}
                                isProfilePage={true}
                            /> : <NoMoviesMessage>Nenhum filme</NoMoviesMessage>
                            }
                        </MovieWrapper>
                        <MovieWrapper>
                            <Title>Histórico</Title>
                            {moviesHistory && moviesHistory.length > 0 ? 
                            <MovieList
                                movies={moviesHistory}
                                showAll={showAll.moviesHistory}
                                toggleShowAll={() => toggleShowAll('moviesHistory')}
                                onRemoveMovie={(movieId) => handleRemoveMovie(movieId, 'history')}
                                isProfilePage={true}
                            /> : <NoMoviesMessage>Nenhum filme</NoMoviesMessage>
                            }
                        </MovieWrapper>
                    </>
                }
            </ProfileSection>
        </ProfileContainer>  
    )
}

export default Profile;