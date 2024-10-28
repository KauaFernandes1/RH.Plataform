import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Hook para redirecionar

    const handleLogin = () => {
        const validUser = 'pedro123';
        const validPassword = 'senha123';

        if (username === validUser && password === validPassword) {
            setError('');
            navigate('/home'); // Redireciona para a rota /home
        } else {
            setError('Usuário ou senha incorretos');
        }
    };

    return (
        <LoginContainer>
            <UserInput value={username} onChange={(e) => setUsername(e.target.value)} />
            <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <LoginButton onClick={handleLogin}>Login</LoginButton>
        </LoginContainer>
    );
};

export const UserInput = ({ value, onChange }) => {
    return (
        <InputContainer>
            <label>Usuário</label>
            <InputUser
                type="text"
                // user default: pedro123
                placeholder="Usuario"
                value={value}
                onChange={onChange}
            />
        </InputContainer>
    );
};

export const PasswordInput = ({ value, onChange }) => {
    return (
        <InputContainer>
            <label>Senha</label>
            <InputUser
                type="password"
                placeholder="******"
                value={value}
                onChange={onChange}
            />
        </InputContainer>
    );
};

// Estilos
const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 300px;
    height: 300px;
    margin: auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
`;

const InputUser = styled.input`
    padding: 10px;
    border: 1px solid #b9bcbf;
    border-radius: 4px;
`;

const ErrorMessage = styled.span`
    color: red;
    font-size: 14px;
`;

const LoginButton = styled.button`
    padding: 10px;
    width: 100%;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #0268D7;
        color: #D9D9DA;
    }
`;
