import React from 'react';
import styled from 'styled-components';
import { FaUsers, FaVideo, FaMicrophone, FaCommentDots, FaCircle, FaMicrophoneSlash, FaVideoSlash, FaSignOutAlt, FaDesktop, FaClosedCaptioning, FaPaperPlane } from 'react-icons/fa';


const Reuniao = () => {
  return (
    <Container>
      <Sidebar>
        <img src="https://storage.googleapis.com/a1aa/image/brcwa3hvFkJqBtJdhy6r1Ml5LzkzezQe8kbVR81G7rZmICsTA.jpg" alt="User profile" width="40" height="40" />
        <SidebarIcon active><FaUsers /></SidebarIcon>
        <SidebarIcon><FaVideo /></SidebarIcon>
        <SidebarIcon><FaMicrophone /></SidebarIcon>
        <SidebarIcon><FaCommentDots /></SidebarIcon>
      </Sidebar>

      <MainContent>
        <Header>
          <div>
            <Title>Product Design Weekly Meeting</Title>
            <Recording>
              <FaCircle color="#FF0000" style={{ marginRight: '5px' }} />
              Recording 26:32
            </Recording>
          </div>
          <ShareLink>Share meeting link</ShareLink>
        </Header>

        <VideoSection>
          <VideoImage src="https://storage.googleapis.com/a1aa/image/e2i2OlYW2kWe10mVjN7v5JuX9QbJezmaZM6ecXD9spNOiIwOB.jpg" alt="Participant video" />
          <NameTag>Binna</NameTag>
        </VideoSection>

        <Footer>
          <FooterButton red><FaMicrophoneSlash /> Mute</FooterButton>
          <FooterButton red><FaVideoSlash /> Stop Video</FooterButton>
          <FooterButton red><FaSignOutAlt /> Leave Meeting</FooterButton>
          <FooterButton><FaDesktop /> Share Screen</FooterButton>
          <FooterButton><FaClosedCaptioning /> CC</FooterButton>
        </Footer>
      </MainContent>

      <ChatSection>
        <ChatHeader>Messages</ChatHeader>
        <ChatDescription>You can chat here with other members during the meeting and they will be deleted after the meeting.</ChatDescription>

        {[1, 2, 3, 4, 5].map((_, index) => (
          <Message key={index}>
            <img src="https://storage.googleapis.com/a1aa/image/brcwa3hvFkJqBtJdhy6r1Ml5LzkzezQe8kbVR81G7rZmICsTA.jpg" alt="User profile" width="40" height="40" />
            <MessageText blue={index % 2 === 0}>Hello, this is a sample message.</MessageText>
            <MessageTime>9:20</MessageTime>
          </Message>
        ))}

        <InputSection>
          <Input placeholder="Write a message..." />
          <SendButton><FaPaperPlane /></SendButton>
        </InputSection>
      </ChatSection>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  background-color: #F5F7FB;
`;

const Sidebar = styled.div`
  width: 80px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  border-right: 1px solid #E0E0E0;
`;

const SidebarIcon = styled.div`
  font-size: 24px;
  color: ${props => props.active ? '#007BFF' : '#A0A0A0'};
  margin: 20px 0;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
`;

const Recording = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #A0A0A0;
`;

const ShareLink = styled.div`
  background-color: #E0E7FF;
  color: #007BFF;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

const VideoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
`;

const VideoImage = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
`;

const NameTag = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #FFFFFF;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const FooterButton = styled.button`
  background-color: ${props => props.red ? '#FF4D4F' : '#007BFF'};
  color: #FFFFFF;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin: 0 10px;
  display: flex;
  align-items: center;

  & i {
    margin-right: 5px;
  }
`;

const ChatSection = styled.div`
  width: 300px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #E0E0E0;
  padding: 20px;
`;

const ChatHeader = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const ChatDescription = styled.p`
  font-size: 14px;
  color: #A0A0A0;
  margin-bottom: 20px;
`;

const Message = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const MessageText = styled.div`
  background-color: ${props => props.blue ? '#E0E7FF' : '#F0F0F0'};
  color: ${props => props.blue ? '#007BFF' : '#000'};
  padding: 10px;
  border-radius: 10px;
  font-size: 14px;
  max-width: 200px;
`;

const MessageTime = styled.div`
  font-size: 12px;
  color: #A0A0A0;
  margin-left: 10px;
`;

const InputSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #E0E0E0;
  border-radius: 20px;
  font-size: 14px;
  margin-right: 10px;
`;

const SendButton = styled.button`
  background-color: #007BFF;
  color: #FFFFFF;
  padding: 10px;
  border: none;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
`;


export default Reuniao;
