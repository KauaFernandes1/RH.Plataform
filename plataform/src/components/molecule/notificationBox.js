import styled from 'styled-components'


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


export const NotificationCard = () => {
    return (
        <NotificationBox>
                <NotificationText>A capacidade de armazenamento contratada esta em 76%</NotificationText>
            <div>
                <NotificationButton className="dismiss">Descartar</NotificationButton>
                <NotificationButton>Update</NotificationButton>
            </div>
        </NotificationBox> 
    )
}

