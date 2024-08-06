import { useState } from "react";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { HamburgerMenu, MenuLinks, MenuItem, DivLinks, LoginText, HeaderIcon, MenuBars } from './HeaderBurguerStyled';

const HeaderBurger = ({ links, toLinks, iconLinks, isAuthenticated, onReset, handleLogout }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <HeaderIcon>
                <MenuBars onClick={toggleMenu} />
            </HeaderIcon>
            {isMenuOpen && (
                <HamburgerMenu>
                    <MdClose fontSize={"200%"} onClick={toggleMenu} />
                    <MenuLinks>
                        {links.map((link, index) => (
                            <MenuItem key={index}>
                                <Link to={toLinks[index]} onClick={() => {onReset(); toggleMenu();}}>
                                    <DivLinks> {iconLinks[index]} {link} </DivLinks>
                                </Link>
                            </MenuItem>
                        ))}
                        {isAuthenticated ? (
                            <MenuItem onClick={() => {handleLogout(); toggleMenu();}}>
                                <CiLogout fontSize={"200%"} />
                                <LoginText>Logout</LoginText>
                            </MenuItem>
                        ) : (
                            <MenuItem onClick={toggleMenu}>
                                <Link to={"/login-registro"}>
                                    <DivLinks>
                                        <GoPerson fontSize={"200%"} />
                                        <LoginText> Login ou Registro</LoginText>
                                    </DivLinks>
                                </Link>
                            </MenuItem>
                        )}
                    </MenuLinks>
                </HamburgerMenu>
            )}
        </>
    );
};

export default HeaderBurger;
