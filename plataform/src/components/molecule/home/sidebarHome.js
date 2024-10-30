import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const SidebarLink = styled(Link)`
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

const BottomSection = styled.div``;

const BottomLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 8px;
  color: #333;
  padding: 10px;
  border-radius: 4rem;
  background-color: #f5f7fa;
  transition: 1s;
  &:hover {
    background-color: #238DFF;
    color: white;
  }
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  margin-right: 10px;
`;

const Notification = styled.i`
  margin-left: auto;
  color: #ff3b30;
`;

const NewBadge = styled.span`
  background-color: #ff3b30;
  color: #ffffff;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 10px;
  margin-left: 10px;
`;

export const SidebarOrigin = () => {
  return (
    <Sidebar>
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
      <SidebarHeader>Menu</SidebarHeader>
      <SidebarList>
        <SidebarItem>
          <SidebarLink to="/home">
            <SidebarIcon className="fas fa-home" /> Home
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="/home/funcionarios">
            <SidebarIcon className="fas fa-building" /> Funcionarios
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="/home/holerites">
            <SidebarIcon className="fas fa-shield-alt" /> Holerites
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="/home/documentos">
            <SidebarIcon className="fas fa-user" /> Documentos
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="/home/contas">
            <SidebarIcon className="fas fa-car" /> Contas
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="/home/eventos">
            <SidebarIcon className="fas fa-id-card" /> Eventos
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="/home/autorizacoes">
            <SidebarIcon className="fas fa-check-circle" /> Autorizações
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="/home/calendario">
            <SidebarIcon className="fas fa-tasks" /> Calendario <NewBadge>New</NewBadge>
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="/home/reunioes">
            <SidebarIcon className="fas fa-road" /> Reuniões <NewBadge>New</NewBadge>
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="/home/ajuda">
            <SidebarIcon className="fas fa-question-circle" /> Ajuda
          </SidebarLink>
        </SidebarItem>
      </SidebarList>
    </Sidebar>
  );
};
