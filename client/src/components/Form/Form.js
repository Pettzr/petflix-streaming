import { FormContainer, FormInput, FormSend, FormTitle, FormWrapper } from "./FormStyled";


const Form = ({ formData, handleSubmit, fields, submitText, handleChange }) => {

    return(
        <FormContainer onSubmit={handleSubmit}>
            {fields.map( (field) => (
                <FormWrapper key={field.name}>
                    <FormTitle>{field.alias}</FormTitle>
                    <FormInput
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                    />
                </FormWrapper>
            ))}
            <FormSend type="submit" value={submitText} />
        </FormContainer>
    )
}

export default Form;