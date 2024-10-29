import { NotificationCard } from '../molecule/home/notificationBox';
import { CardsStatistics } from '../molecule/home/statisticCards';
import { SidebarOrigin } from '../molecule/home/sidebarHome';
import { QuickActionCard } from '../molecule/home/quickAction';
import { VisionCard } from '../molecule/home/visionCard';

import styled from 'styled-components';
import { Outlet } from 'react-router-dom';  // Importe o Outlet aqui

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
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

const HomeContent = () => {
  return (
    <Container>
      <SidebarOrigin />
      <MainContent>
        <MainHeader>Bem vindo de volta!</MainHeader>
        <MainText>Lembre-se de verificar seus emails sempre que possível!</MainText>
        
        {/* Componentes fixos */}
        <CardsStatistics />
        <NotificationCard />
        <QuickActionCard />
        <VisionCard />

        {/* Componente Outlet para renderizar as subrotas */}
        <Outlet />
      </MainContent>
    </Container>
  );
};

export default HomeContent;
