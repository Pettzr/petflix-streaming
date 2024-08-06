import styled from "styled-components"
import theme from "../../styles/theme"
import Cards from "../Cards/Cards"

const SlideContainer = styled.div`
    width: 100%;
    margin-bottom: 5%;
    padding: 4% 4% 4% 3%;

    .slick-slide > div {
        display: flex;
        justify-content: space-evenly;
        padding: 0.4rem;

        
        @media (max-width: ${theme.breakpoints.mobile}) {
            padding: 0.6rem;
            justify-content: none;  
        }

        @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet}) {
        
        }
    }

    .slick-prev, .slick-next {
        z-index: 1;
    }

    .slick-prev:before, .slick-next:before {
        color:white;
        font-size: 1.95rem;
    }

    .slick-prev {
        left: -1.5rem;

        @media (max-width: ${theme.breakpoints.mobile}) {
            left: 1rem;
        }

        @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet}) {
            left: 1rem;
        }
    }

    .slick-next {
        right: -0.95rem;

        @media (max-width: ${theme.breakpoints.mobile}) {
            right: 1.8rem;
        }

        @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet}) {
            right: 1.8rem;
        }
    }

    .slick-dots {
        bottom: -15%;       
        
        @media (max-width: ${theme.breakpoints.mobile}) {
            bottom: -8%;
        }

        @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet}) {
            bottom: -12%;
        }
    }

    .slick-dots li {
        margin: 0 0.6%;

        @media (max-width: ${theme.breakpoints.mobile}) {
            margin: 0 1%;
        }

        @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet}) {
        
        }
        
    }

    .slick-dots li button:before {
        font-size: 0.7rem;
        color: ${theme.colors.white}
        
    }

    .slick-dots li.slick-active button:before {
        color: ${theme.colors.white}
    }

    .slick-list{
        overflow: visible
    }


`

const SlideTitle = styled.h1`
    margin-top: ${({ $marginTop }) => $marginTop || '0'};
    margin-bottom: 1%;
    font-size: 2rem;
    font-family: ${theme.fonts.titles};
    font-weight: ${theme.fontWeights.normal};
    color: ${theme.colors.white};
    text-shadow: 0.2rem 0.2rem 0.3rem rgba(0, 0, 0, 0.5);

    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 2.5rem;
        margin-bottom: 4%;
    }

    @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet}) {
        font-size: 2.5rem;    
        margin-bottom: 3%;
    }
`

const SlideCard = styled(Cards)`
    max-width: 1%;
`

export {
    SlideContainer,
    SlideTitle,
    SlideCard
}