import styled from 'styled-components'





const QuickActions = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const Action = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  flex: 1;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const ActionHeader = styled.h3`
  margin: 0;
  font-size: 18px;
`;

const ActionText = styled.p`
  margin: 0;
  color: #666;
`;


export const QuickActionCard = () => {
    return (
    <QuickActions>
        <Action>
            <ActionHeader>Adicionar Colaborador</ActionHeader>
            <ActionText>Adicione um ou multiplos colaboradores.</ActionText>
        </Action>
        <Action>
            <ActionHeader>Adicionar Documentos</ActionHeader>
            <ActionText>Armazene seus arquivos importantes com segurança.</ActionText>
        </Action>
    </QuickActions>
    )
}

