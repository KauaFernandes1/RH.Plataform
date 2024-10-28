import {Form} from '../organism/formLogin'
import styled from 'styled-components'

const Login = () => {
    return (
        <Container>
            <Form />
        </Container>
    )
}


export const Container = styled.div`
width: 100%;
height: 100vh;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
background: linear-gradient(180deg, #56CCF2 0%, #2F80ED 100%);
`

export default Login;