import React from 'react';
import { NotificationCard } from '../molecule/home/notificationBox';
import { CardsStatistics } from '../molecule/home/statisticCards';
import { SidebarOrigin } from '../molecule/home/sidebarHome';
import { QuickActionCard } from '../molecule/home/quickAction';
import { VisionCard } from '../molecule/home/visionCard';
import styled from 'styled-components';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

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

const HomeContent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Verifica se está na rota "/home"
  const isHomeRoute = location.pathname === '/home';

  return (
    <Container>
      <SidebarOrigin navigate={navigate} />
      <MainContent>
        {isHomeRoute && (
          <>
            <h1>Bem vindo de volta!</h1>
            <p>Lembre-se de verificar seus emails sempre que possível!</p>
            
            {/* Componentes fixos que só aparecem na rota "/home" */}
            <CardsStatistics />
            <NotificationCard />
            <QuickActionCard />
            <VisionCard />
          </>
        )}

        {/* Renderizando o conteúdo das subrotas */}
        <Outlet />
      </MainContent>
    </Container>
  );
};

export default HomeContent;
