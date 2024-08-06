import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import { CopyRight, DivLinks, FooterContainer, FooterLi, FooterSection, FooterUl } from "./FooterStyled";
import { SiLinkedin } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import theme from "../../styles/theme";


const Footer = () => {
    const links = ['LinkedIn','GitHub']
    const toLinks = ['https://www.linkedin.com/in/petterzz/', 'https://github.com/Pettzr']
    const iconLinks = [<SiLinkedin fontSize={"1.7vw"}/>, <VscGithub fontSize={"1.7vw"}/>]
    const iconsColor = [theme.colors.blue, theme.colors.darkOrange];

    return(
        <FooterContainer>
            <FooterSection>
                <Logo text={false} />
                <FooterUl>
                    {links.map((link, index) => (
                        <FooterLi key={index}>
                            <Link to={toLinks[index]} target="_blank">
                                <DivLinks $colorHover={iconsColor[index]}>
                                    {iconLinks[index]} {link}
                                </DivLinks>
                            </Link>
                        </FooterLi>
                    ))}
                </FooterUl>
            </FooterSection>
            <CopyRight>
                2024 © Desenvolvido por Peterson Gonçalves | Streaming de video - Projeto Fullstack
            </CopyRight>
        </FooterContainer>
    )
}

export default Footer;