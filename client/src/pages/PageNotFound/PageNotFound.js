import { PageNotFoundMessage } from "./PageNotFoundStyled";

const PageNotFound = ({movie}) => {
    
    return(
        <PageNotFoundMessage>
            { movie ? 'Nenhum filme foi encontrado na busca.' : 'Essa página não foi encontrada ou não existe.' }
        </PageNotFoundMessage>
    )
}

export default PageNotFound;