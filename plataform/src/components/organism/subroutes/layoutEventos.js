import React from 'react';
import styled from 'styled-components';



const Event = ({ day, weekday, title, person, time, location }) => (
  <EventItem>
    <Date>
      <Day>{day}</Day>
      <Weekday>{weekday}</Weekday>
    </Date>
    <Details>
      <EventTitle>{title}</EventTitle>
      <Info>

      </Info>
    </Details>
  </EventItem>
);

const Eventos = () => (
  <Container>
    <Header>
      <Title>Events</Title>
      <Buttons>
        <Button primary>+ New Event</Button>
        <Button>List</Button>
        <Button>Calendar</Button>
        <Select>
          <option>Show: Upcoming</option>
        </Select>
      </Buttons>
    </Header>
    <EventList>
      <Event day="Dec 28" weekday="Thursday" title="User Journey Mapping Session" person="Brooklyn Simmons" time="10:00 AM" location="Online" />
      <Event day="Dec 28" weekday="Thursday" title="Usability Testing Debrief" person="Robert Fox" time="04:00 PM" location="Online" />
      <Event day="Dec 30" weekday="Saturday" title="Design Sprint Workshop" person="Savannah Nguyen" time="11:00 AM" location="Saad Pattern HQ" />
      <Event day="Jan 02" weekday="Tuesday" title="Accessibility Review" person="Cody Fisher" time="09:00 AM" location="Online" />
      <Event day="Jan 02" weekday="Tuesday" title="Cross-Functional Collaboration" person="Bessie Cooper" time="12:00 PM" location="Online" />
      <Event day="Jan 02" weekday="Tuesday" title="Kickoff X Project" person="Darlene Robertson" time="05:00 PM" location="Online" />
      <Event day="Jan 03" weekday="Wednesday" title="Final Design Review" person="Cameron Williamson" time="09:00 AM" location="Online" />
      <Event day="Jan 03" weekday="Wednesday" title="Final Design Review" person="Cameron Williamson" time="09:00 AM" location="Online" />
      <Event day="Jan 03" weekday="Wednesday" title="Final Design Review" person="Cameron Williamson" time="09:00 AM" location="Online" />
    </EventList>
  </Container>

);

const Container = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${props => (props.primary ? '#3b82f6' : '#f1f1f1')};
  color: ${props => (props.primary ? '#fff' : '#000')};
`;

const Select = styled.select`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #f1f1f1;
`;

const EventList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const EventItem = styled.li`
  display: flex;
  align-items: center;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 10px;
  background-color: #fff;
`;

const Date = styled.div`
  width: 80px;
  text-align: center;
  margin-right: 20px;
`;

const Day = styled.span`
  font-size: 18px;
  font-weight: bold;
  display: block;
`;

const Weekday = styled.span`
  color: #888;
  display: block;
`;

const Details = styled.div`
  flex-grow: 1;
`;

const EventTitle = styled.h3`
  margin: 0;
  font-size: 18px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #888;
  font-size: 14px;
`;

export default Eventos;
