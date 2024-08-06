import { useEffect, useRef, useState } from "react"
import { GradientOverlay, MovieListContainer, MoviesRowContainer, ShowMoreButton } from "./MovieListStyled"
import Cards from "../Cards/Cards";
import useDeviceType from "../../hooks/useDeviceType";


const MovieList = ({movies, showAll, toggleShowAll, onRemoveMovie, isProfilePage }) => {
    const [maxHeight, setMaxHeight] = useState('50vh');
    const moviesRowRef = useRef(null);
    const deviceType = useDeviceType();

    useEffect(() => {
        if(moviesRowRef.current) {
            setMaxHeight(`${moviesRowRef.current.scrollHeight}px`)
        }
    }, [movies, showAll])

    const showMoreButtonCondition =
        deviceType === "mobile" ? movies.length > 2 :
        deviceType === "tablet" ? movies.length > 3 :
        movies.length > 7;

    return (
        <MovieListContainer>
            <MoviesRowContainer 
                $showAll={showAll}
                $maxHeight={maxHeight}
                ref={moviesRowRef}
            >
                {(showAll ? movies : movies.slice(0, 14)).map((movie) => (
                    <Cards
                        key={movie.title}
                        title={movie.title}
                        img={movie.image}
                        to={`/filme/${movie.slug}`}
                        state={{movie}}
                        onRemove={() => onRemoveMovie(movie._id)}
                        isProfilePage={isProfilePage}
                    />
                ))}
                {showMoreButtonCondition && (
                    <>
                        <GradientOverlay $showAll={showAll} />
                        <ShowMoreButton onClick={toggleShowAll} $showAll={showAll}>
                            {showAll ? "Mostrar Menos" : "Mostrar Tudo"}
                        </ShowMoreButton>
                        
                    </>
                )}
            </MoviesRowContainer>
        </MovieListContainer>
    )

}

export default MovieList;