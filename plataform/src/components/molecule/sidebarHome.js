import styled from 'styled-components'

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
<SidebarHeader>Menu</SidebarHeader>
<SidebarList>
  <SidebarItem>
    <SidebarLink className="active" href="/home">
      <SidebarIcon className="fas fa-home" /> Home
    </SidebarLink>
  </SidebarItem>
  <SidebarItem>
    <SidebarLink href="/GestaoFuncionarios">
      <SidebarIcon className="fas fa-building" /> Gestão Funcionarios
    </SidebarLink>
  </SidebarItem>
  <SidebarItem>
    <SidebarLink href="/Holerites">
      <SidebarIcon className="fas fa-shield-alt" /> Holerites
    </SidebarLink>
  </SidebarItem>
  <SidebarItem>
    <SidebarLink href="Documentos">
      <SidebarIcon className="fas fa-user" /> Documentos
    </SidebarLink>
  </SidebarItem>
  <SidebarItem>
    <SidebarLink href="/ContasAPagar">
      <SidebarIcon className="fas fa-car" /> Contas a pagar
    </SidebarLink>
  </SidebarItem>
  <SidebarItem>
    <SidebarLink href="/Eventos">
      <SidebarIcon className="fas fa-id-card" /> Eventos
    </SidebarLink>
  </SidebarItem>
  <SidebarItem>
    <SidebarLink href="Autorizacoes">
      <SidebarIcon className="fas fa-check-circle" /> Autorizações
    </SidebarLink>
  </SidebarItem>

</SidebarList>
<SidebarList>
  <SidebarItem>
    <SidebarLink href="/Calendario">
      <SidebarIcon className="fas fa-tasks" /> Calendario <NewBadge>New</NewBadge>
    </SidebarLink>
  </SidebarItem>
  <SidebarItem>
    <SidebarLink href="/Reunioes">
      <SidebarIcon className="fas fa-road" /> Reuniões <NewBadge>New</NewBadge>
    </SidebarLink>
  </SidebarItem>

  <SidebarItem>
    <SidebarLink href="/Ajuda">
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

    )

}