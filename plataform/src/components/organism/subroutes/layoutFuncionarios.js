import React, { useState } from 'react';
import styled from 'styled-components';





export const FuncionariosApp = () => {

    const [modalVisible, setModalVisible] = useState(false);
const [modalData, setModalData] = useState({});

const openModal = (user) => {
  setModalData(user);
  setModalVisible(true);
};

const closeModal = () => setModalVisible(false);

const users = [
  {
    name: 'Jane Cooper',
    email: 'jane.cooper@example.com',
    group: 'Hardware Eng',
    role: 'APPROVER',
    image: 'https://placehold.co/30x30',
    status: 'ACTIVE',
  },
  // Add more users as needed
];
return (
  <Container>
    <Sidebar>
      <Title>Users</Title>
      <UserTable>
        <thead>
          <tr>
            <TableHeader>USER</TableHeader>
            <TableHeader>EMAIL ADDRESS</TableHeader>
            <TableHeader>USER GROUP</TableHeader>
            <TableHeader>ROLE</TableHeader>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <TableRow key={index} onClick={() => openModal(user)}>
              <TableCell>
                <UserInfo>
                  <UserImage src={user.image} alt="User" />
                  {user.name}
                  <Status className={user.status.toLowerCase()}>{user.status}</Status>
                </UserInfo>
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.group}</TableCell>
              <TableCell>
                <Role className={user.role.toLowerCase()}>{user.role}</Role>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </UserTable>
    </Sidebar>
    {modalVisible && (
      <Modal>
        <ModalContent>
          <CloseButton onClick={closeModal}>&times;</CloseButton>
          <Details>
            <UserProfile>
              <UserImage src={modalData.image} alt="User" large />
              <UserInfo>
                <UserName>{modalData.name}</UserName>
                <UserEmail>{modalData.email}</UserEmail>
                <Status className={modalData.status.toLowerCase()}>{modalData.status}</Status>
              </UserInfo>
            </UserProfile>
            <Activity>
              <ActivityItem>
                <ActivityInfo>
                  <ActivityTitle>{modalData.group}</ActivityTitle>
                  <ActivityTime>{modalData.role}</ActivityTime>
                </ActivityInfo>
              </ActivityItem>
            </Activity>
            <EditButton>
              <button>Edit Profile</button>
            </EditButton>
          </Details>
        </ModalContent>
      </Modal>
    )}
  </Container>
);
};



export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Sidebar = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border-right: 1px solid #e0e0e0;
`;

export const Title = styled.h2`
  margin: 0;
  padding-bottom: 20px;
  font-size: 24px;
`;

export const UserTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
  background-color: #f9f9f9;
  font-weight: bold;
  border-bottom: 1px solid #e0e0e0;
`;

export const TableRow = styled.tr`
  &:hover td {
    background-color: #f1f1f1;
  }
  cursor: pointer;
`;

export const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const UserImage = styled.img`
  border-radius: 50%;
  width: ${({ large }) => (large ? '50px' : '30px')};
  height: ${({ large }) => (large ? '50px' : '30px')};
  margin-right: 10px;
`;

export const Status = styled.span`
  display: inline-block;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  color: #fff;

  &.active {
    background-color: #28a745;
  }

  &.inactive {
    background-color: #6c757d;
  }
`;

export const Role = styled.span`
  display: inline-block;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  color: #fff;

  &.approver {
    background-color: #28a745;
  }
  &.view-only {
    background-color: #6c757d;
  }
  &.engineer {
    background-color: #6f42c1;
  }
  &.admin {
    background-color: #fd7e14;
  }
`;

export const Modal = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  background-color: #fff;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 600px;
  border-radius: 10px;
`;

export const CloseButton = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;

  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
  }
`;

export const Details = styled.div``;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const UserName = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export const UserEmail = styled.div`
  font-size: 14px;
  color: #6c757d;
`;

export const Activity = styled.div`
  margin-top: 20px;
`;

export const ActivityItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const ActivityInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ActivityTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

export const ActivityTime = styled.div`
  font-size: 12px;
  color: #6c757d;
`;

export const EditButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
  }
`;

