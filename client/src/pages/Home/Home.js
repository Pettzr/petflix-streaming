import { useContext } from "react";
import Cards from "../../components/Cards/Cards";
import { HomeContainer, HomeSection, HomeTitle } from "./HomeStyled";
import movieService from "../../services/movieService";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import SlidesHome from "../../components/SlidesHome/SlidesHome";
import useFetch from "../../hooks/useFetch";
import PageNotFound from "../../pages/PageNotFound/PageNotFound";
import useDeviceType from "../../hooks/useDeviceType";

const Home = () => {;
    const { genre, search } = useParams();
    const { key } = useContext(AppContext);
    const deviceType =  useDeviceType()
    const genres = ['Todos', 'Ação', 'Comédia', 'Drama', 'Terror', 'Romance', 'Fantasia', 'Aventura'];

    const fetchFunction = search
      ? movieService.getMoviesBySearch
      : genre && genre !== "Todos"
      ? movieService.getMoviesByGenre
      : genre && genre === "Todos"
      ? movieService.getAllMovies
      : movieService.getRandomMovies;
  
    let { data: movies = [], loading, error } = useFetch(fetchFunction, search ? search : genre && genre !== "Todos" ? genre : null);
  
    if (error) {
      console.error('Erro ao buscar filmes', error);
    }

    if (genre && !genres.includes(genre)) {
        return <PageNotFound />;
    }

    if (movies && deviceType !== 'desktop' && !genre && !search) {
        if (deviceType === 'mobile') {
            movies = movies.slice(0, 9) 
        } 
        else if (deviceType === 'tablet') {
            movies = movies.slice(0, 12);
        } 
    }

    return(
        <HomeContainer key={key}>
            <SearchBar genres={genres} />
            { (search || genre ) ? '' : 
            <>
                <SlidesHome />
                <HomeTitle>Explorar</HomeTitle>
            </>
            }
            { loading ? null : ( movies.length > 0 ?  
                <HomeSection > 
                    {movies.map((movie) => (
                        <Cards
                            key={movie.title}
                            title={movie.title}
                            img={movie.image}
                            to={`/filme/${movie.slug}`}
                            state={{movie}}
                        />
                    ))}
                </HomeSection>
            : <PageNotFound movie={true}/> ) }
        </HomeContainer>
    )
}

export default Home;