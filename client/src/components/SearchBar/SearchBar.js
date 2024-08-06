import { useNavigate, useParams } from "react-router-dom";
import { InputSearch, SearchDiv, ButtonSearch, SearchBarContainer } from "./SearchBarStyled";
import { useContext, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { AppContext } from "../../context/AppContext";
import GenreFilter from "../GenreFilter/GenreFilter";


const SearchBar = ({genres}) => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const {genre: selectedGenre} = useParams()
    const { onReset } = useContext(AppContext)

    const handleGenreClick = (genre) => {   
        navigate(`/genero/${genre}`);
        onReset()
    }

    const performSearch = () => {
        const trimmedSearch = search.trim()
        if (trimmedSearch) {
            navigate(`/busca/${trimmedSearch}`)
        }
        onReset()
    }

    const handleSearchTitle = (event) => {
        if (event.key === "Enter") {
            performSearch()
        }
    }

    return(
        <SearchBarContainer>
            <SearchDiv>
                <InputSearch 
                    type="text"
                    placeholder="Pesquise um filme..." 
                    value={search}
                    onChange={(event) => setSearch(event.target.value)} 
                    onKeyDown={handleSearchTitle}
                />
                <ButtonSearch onClick={performSearch}>
                    <FaMagnifyingGlass fontSize={"2rem"}/>  
                </ButtonSearch>
            </SearchDiv>
            <GenreFilter
                genres={genres}
                selectedGenre={selectedGenre}
                handleGenreClick={handleGenreClick}
            />
        </SearchBarContainer>
    )
}

export default SearchBar;