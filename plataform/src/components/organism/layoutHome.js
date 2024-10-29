import {NotificationCard} from '../molecule/notificationBox'
import {CardsStatistics} from '../molecule/statisticCards'
import {SidebarOrigin} from '../molecule/sidebarHome'
import {QuickActionCard} from '../molecule/quickAction'
import {VisionCard} from '../molecule/visionCard'


import styled from 'styled-components'

const Container = styled.div`
  display: flex;

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
        <SidebarOrigin/>
        <MainContent>
          <MainHeader>Bem vindo de volta!</MainHeader>
          <MainText>Lembres-se de verificar seus emails sempre que possivel!.</MainText>
          <CardsStatistics/>
          <NotificationCard/>
          <QuickActionCard/>
          <VisionCard/>
        </MainContent>
    </Container>

    )


}


export default HomeContent;