import { Link } from 'react-router-dom';
import ImagemLogo from '../../images/teste-removebg.png'
import { LogoContainer, LogoImg, LogoName, LogoNameContainer } from './LogoStyled'
import theme from '../../styles/theme';

const Logo = ({text = true}) =>{
    return(
        <LogoContainer title='Início'>
            <Link to={'/'} style={{display:'flex'}} > 
                <LogoImg src={ImagemLogo} />
                { text ? 
                <LogoNameContainer>
                    <LogoName color={theme.colors.orange} >Pet</LogoName>
                    <LogoName color={theme.colors.cyan} >Flix</LogoName>
                </LogoNameContainer>
                : null }
            </Link>
        </LogoContainer>
      
    )
}

export default Logo;