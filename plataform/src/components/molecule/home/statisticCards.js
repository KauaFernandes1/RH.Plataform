import styled from 'styled-components'


const Stats = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const Stat = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  flex: 1;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const StatHeader = styled.h2`
  font-size: 32px;
  margin: 0;
`;

const StatText = styled.p`
  margin: 0;
  color: #666;
`;

const StatLink = styled.a`
  display: block;
  margin-top: 10px;
  color: #007bff;
  text-decoration: none;
`;


export const CardsStatistics = () => {
    return (

    <Stats>
        <Stat>
            <StatHeader>15</StatHeader>
            <StatText>Documentos novos</StatText>
            <StatLink href="#">Veja mais</StatLink>
        </Stat>
        <Stat>
            <StatHeader>57</StatHeader>
            <StatText>Documentos rejeitados</StatText>
            <StatLink href="#">Analisar</StatLink>
        </Stat>
        <Stat>
            <StatHeader>14</StatHeader>
            <StatText>Novos colaboradores</StatText>
            <StatLink href="#">Conhecer</StatLink>
        </Stat>
            <Stat>
            <StatHeader>27</StatHeader>
            <StatText>Autorizações expiradas</StatText>
            <StatLink href="#">Analisar</StatLink>
        </Stat>
    </Stats>


    )
}

