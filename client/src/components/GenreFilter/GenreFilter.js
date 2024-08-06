import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Drawer, GenreButton, Overlay, SearchButtonsContainer } from './GenreFilterStyled';
import useDeviceType from '../../hooks/useDeviceType';

const GenreFilter = ({ genres, selectedGenre, handleGenreClick }) => {
    const deviceType = useDeviceType();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div>
            {deviceType === 'mobile' || deviceType === 'tablet' ? (
                <>
                    <GenreButton onClick={toggleDrawer}>
                        {selectedGenre ? selectedGenre : 'Filtrar por gênero'} {isDrawerOpen ? <IoIosArrowUp fontSize={'1.2rem'} /> : <IoIosArrowDown fontSize={'1.2rem'} />}
                    </GenreButton>
                    <Overlay $isOpen={isDrawerOpen} onClick={toggleDrawer} />
                    <Drawer $isOpen={isDrawerOpen}>
                        <SearchButtonsContainer>
                            {genres.map((genre) => (
                                <GenreButton
                                    key={genre}
                                    value={genre}
                                    onClick={() => {
                                        handleGenreClick(genre);
                                        setIsDrawerOpen(false);
                                    }}
                                    $isActive={selectedGenre === genre}
                                >
                                    {genre}
                                </GenreButton>
                            ))}
                        </SearchButtonsContainer>
                    </Drawer>
                </>
            ) : (
                <SearchButtonsContainer>
                    {genres.map((genre) => (
                        <GenreButton
                            key={genre}
                            value={genre}
                            onClick={() => handleGenreClick(genre)}
                            $isActive={selectedGenre === genre}
                        >
                            {genre}
                        </GenreButton>
                    ))}
                </SearchButtonsContainer>
            )}
        </div>
    );
};

export default GenreFilter;
