// App.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: auto;
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const SidebarHeader = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SidebarItem = styled.li`
  margin-bottom: 10px;
`;

const SidebarLink = styled.a`
  text-decoration: none;
  color: #333;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  &:hover,
  &.active {
    background-color: #e6f0ff;
    color: #007bff;
  }
`;

const SidebarIcon = styled.i`
  margin-right: 10px;
`;

const BottomSection = styled.div`
  position: absolute;
  bottom: 20px;
  width: 210px;
`;

const BottomLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  margin-right: 10px;
`;

const Notification = styled.i`
  margin-left: auto;
  color: #ff3b30;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 40px;
  background-color: #f5f7fa;
`;

const MainHeader = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const MainText = styled.p`
  color: #666;
  margin-bottom: 20px;
`;

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

const NotificationBox = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NotificationText = styled.p`
  margin: 0;
  color: #666;
`;

const NotificationButton = styled.button`
  background-color: #007bff;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  &.dismiss {
    background-color: #e0e0e0;
    color: #333;
  }
`;

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

const NewBadge = styled.span`
  background-color: #ff3b30;
  color: #ffffff;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 10px;
  margin-left: 10px;
`;

const App = () => {
  return (
    <Container>
      <Sidebar>
        <SidebarHeader>Menu</SidebarHeader>
        <SidebarList>
          <SidebarItem>
            <SidebarLink className="active" href="#">
              <SidebarIcon className="fas fa-home" /> Home
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink href="#">
              <SidebarIcon className="fas fa-building" /> Gestão Funcionarios
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink href="#">
              <SidebarIcon className="fas fa-shield-alt" /> Holerites
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink href="#">
              <SidebarIcon className="fas fa-user" /> Documentos
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink href="#">
              <SidebarIcon className="fas fa-car" /> Contas a pagar
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink href="#">
              <SidebarIcon className="fas fa-id-card" /> Eventos
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink href="#">
              <SidebarIcon className="fas fa-check-circle" /> Autorizações
            </SidebarLink>
          </SidebarItem>

        </SidebarList>
        <SidebarList>
          <SidebarItem>
            <SidebarLink href="#">
              <SidebarIcon className="fas fa-tasks" /> Calendario <NewBadge>New</NewBadge>
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink href="#">
              <SidebarIcon className="fas fa-road" /> Reuniões <NewBadge>New</NewBadge>
            </SidebarLink>
          </SidebarItem>

          <SidebarItem>
            <SidebarLink href="#">
              <SidebarIcon className="fas fa-question-circle" /> Ajuda
            </SidebarLink>
          </SidebarItem>
        </SidebarList>
        <BottomSection>
          <BottomLink href="#">
            <ProfileImage
              alt="User profile picture"
              height="40"
              src="https://storage.googleapis.com/a1aa/image/YkneXa9TX9QaBKwOSGxAIU8LteHF9N5XVXpvpZsENUjgjXrTA.jpg"
              width="40"
            />
            Pedro Zero hora
            <Notification className="fas fa-bell" />
          </BottomLink>
        </BottomSection>
      </Sidebar>
      <MainContent>
        <MainHeader>Bem vindo de volta!</MainHeader>
        <MainText>Lembres-se de verificar seus emails sempre que possivel!.</MainText>
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
        <NotificationBox>
          <NotificationText>A capacidade de armazenamento contratada esta em 76%</NotificationText>
          <div>
            <NotificationButton className="dismiss">Descartar</NotificationButton>
            <NotificationButton>Update</NotificationButton>
          </div>
        </NotificationBox>
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
      </MainContent>
    </Container>
  );
};

export default App;
