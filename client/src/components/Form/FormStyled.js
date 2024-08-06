import styled from "styled-components"
import theme from "../../styles/theme"

const FormContainer = styled.form`
    background-color: ${theme.colors.white};
    width: 40%;
    padding: 2%;
    display: flex;
    flex-direction: column;
    border-radius: 0.8rem;
    box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.1);

    @media (max-width: ${theme.breakpoints.mobile}) {
        width: 94%;

    }

    @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet}) {
        width: 80%;
    }
`
const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const FormTitle = styled.h3`
    font-size: 1.2rem;
    font-weight: 400;

`

const FormInput = styled.input`
    height: 2.4rem;
    margin-bottom: 2.5%;
    padding: 0 2%;
    border: 0.1rem solid ${theme.colors.lightGrey};
    border-radius: 0.4rem;
    font-size: 0.8rem;
    outline: none;
    transition: border-color 0.3s;

    &:focus {
        background-color: rgba(0,0,0, 0.09);
        border-color: ${theme.colors.lightOrange};
    }

    &::placeholder {
        font-size: 0.9rem;
        font-style: italic;
    }
`

const FormSend = styled.input`
    height: 2.5rem;
    margin: 1rem;
    border: 0.1vh solid ${theme.colors.lightGrey};
    border-radius: 0.4rem;
    font-size: 1rem;
    transition: border-color 0.2s, color 0.2s;
    pointer: active;
    cursor: pointer;

    &:hover{
        color: ${theme.colors.lightOrange};
        border: 0.1rem solid ${theme.colors.lightOrange}
    }
`
export {
    FormContainer,
    FormTitle,
    FormWrapper,
    FormInput,
    FormSend,
}