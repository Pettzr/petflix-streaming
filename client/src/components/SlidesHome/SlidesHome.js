import movieService from "../../services/movieService";
import { SlideCard, SlideContainer, SlideTitle } from "./SlidesHomeStyled";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Cards from "../Cards/Cards";
import useFetch from "../../hooks/useFetch";
import useDeviceType from "../../hooks/useDeviceType";


const SlidesHome = () => {
    const { data: recentMovies, loading: loadingRecent, error: errorRecent } = useFetch(movieService.getRecentMovies);
    const { data: ratingMovies, loading: loadingRating, error: errorRating } = useFetch(movieService.getRatingMovies);
    const device = useDeviceType()

    let amountOfMovies
    device === 'mobile' ?
    amountOfMovies = 1.66 :
    device ===  'tablet' ?
    amountOfMovies = 3.66 :
    amountOfMovies = 7;

    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: amountOfMovies,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    }

    if (errorRecent || errorRating) {
        console.error('Erro ao buscar filmes', errorRecent || errorRating);
    }

    return(
        <SlideContainer>
            <SlideTitle>Lançamentos</SlideTitle>
            {loadingRecent || loadingRating ? null :
            <Slider {...settings}>
                {recentMovies.map(movie => (
                    <SlideCard
                        key={movie.title}
                        title={movie.title}
                        img={movie.image}
                        to={`/filme/${movie.slug}`}
                        state={{movie}}
                    />
                ))}
            </Slider>
            }
            <SlideTitle $marginTop="12vh">Notas mais altas</SlideTitle>
            { loadingRecent || loadingRating ? null :
            <Slider {...settings}>
                {ratingMovies.map(movie => (
                    <Cards
                        key={movie.title}
                        title={movie.title}
                        img={movie.image}
                        to={`/filme/${movie.slug}`}
                        state={{movie}}
                    />
                ))}
            </Slider>
        }
        </SlideContainer>
    )
}

export default SlidesHome;