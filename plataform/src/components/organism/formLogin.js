import styled from 'styled-components'
import {InputLog} from '../molecule/label_input'


export const Form = () => {
    return (
        <FormContainer>
            <InputLog />
            
        </FormContainer>
    )

}

export const FormContainer = styled.div`
width: 400px;
height: 450px;
background-color: #FFFFFF;
border: 2px solid #B9BCBF;
display: flex;
justify-content: center;
box-shadow: 0px 6px 24px 0px rgba(0, 0, 0, 0.05), 0px 6px 24px 1px rgba(0, 0, 0, 0.08);
border-radius: 8px
`