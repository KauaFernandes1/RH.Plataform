  

import styled from 'styled-components'

const TakeALook = styled.div`
display: flex;
gap: 20px;
`;

const Item = styled.div`
background-color: #ffffff;
padding: 20px;
border-radius: 10px;
flex: 1;
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const ItemHeader = styled.h3`
margin: 0;
font-size: 18px;
`;

const ItemText = styled.p`
color: #666;
`;

const ItemButton = styled.button`
background-color: #e0e0e0;
color: #333;
border: none;
padding: 10px 20px;
border-radius: 5px;
cursor: pointer;
&:hover {
  background-color: #d0d0d0;
}
`;

export const VisionCard = () => {
    return (
        <TakeALook>
            <Item>
                <ItemHeader>Templates de documentos</ItemHeader>
                <ItemText>Envie para um novo colaborador um template de ficha de cadastro ou você pode acessar templates de documentos disponiveis, acesse agora para saber mais</ItemText>
                <ItemButton>Saber mais</ItemButton>
            </Item>
            <Item>
                <ItemHeader>HR integration services</ItemHeader>
                <ItemText>By offering HR integration services, your software can help streamline these processes and ensure that employee information is accurate and up-to-date.</ItemText>
                <ItemButton>Learn more</ItemButton>
            </Item>
        </TakeALook>
    )
}
