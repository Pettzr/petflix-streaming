import {InfoWrapper, MovieInfo} from './InfoMoviesPageStyled'


const InfoMoviesPage = ({movie}) => {
    return(
    <InfoWrapper>
        <MovieInfo> Título: {movie.title} </MovieInfo>
        <MovieInfo> Direção: {movie.director} </MovieInfo>
        <MovieInfo> Roteiristas: {movie.writers} </MovieInfo>
        <MovieInfo> Gênero: {[...movie.genre].join(', ')} </MovieInfo>
        <MovieInfo> Data de Lançamento: {movie.releaseYear} </MovieInfo>
        <MovieInfo> Avaliação IMDB: {movie.rating} </MovieInfo>
    </InfoWrapper>
    )
}

export default InfoMoviesPage;