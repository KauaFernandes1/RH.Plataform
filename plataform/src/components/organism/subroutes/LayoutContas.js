import React from 'react';
import styled from 'styled-components';



// Componentes da Aplicação
function Contas() {
  return (
    <>
      <HeaderContainer>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <HeaderIcon
            src="https://storage.googleapis.com/a1aa/image/QyzDJxCLq5Y3MF2R5e4T1Zz3r8l2e895aUpXo4fc6sRtMCYnA.jpg"
            alt="App Icon"
          />
          <span>Get the very best apps for your store</span>
        </div>
        <HeaderButton>Find App</HeaderButton>
      </HeaderContainer>

      <Container>
        <OrdersHeaderContainer>
          <h1>Orders</h1>
          <HeaderButtons>
            <OrdersHeaderButton>Export</OrdersHeaderButton>
            <OrdersHeaderButton>More actions</OrdersHeaderButton>
            <OrdersHeaderButton>Create Order</OrdersHeaderButton>
          </HeaderButtons>
        </OrdersHeaderContainer>

        <StatsContainer>
          <StatCard>
            <h2>48</h2>
            <p>Orders today</p>
          </StatCard>
          <StatCard>
            <h2>493</h2>
            <p>Orders this week</p>
          </StatCard>
          <StatCard>
            <h2>359</h2>
            <p>Fulfilled orders</p>
          </StatCard>
          <StatCard>
            <h2>353</h2>
            <p>Delivered orders</p>
          </StatCard>
        </StatsContainer>

        <FiltersContainer>
          <FilterButtons>
            <FilterButton>All</FilterButton>
            <FilterButton>Unpaid</FilterButton>
            <FilterButton>Need to Ship</FilterButton>
            <FilterButton>Completed</FilterButton>
            <FilterButton>Cancellation</FilterButton>
            <FilterButton>Returns</FilterButton>
          </FilterButtons>
          <div>
            <SearchInput placeholder="Search orders..." type="text" />
            <FilterButton>Filter</FilterButton>
          </div>
        </FiltersContainer>

        <OrdersTableContainer>
          <thead>
            <tr>
              <TableHeader>Order</TableHeader>
              <TableHeader>Customer</TableHeader>
              <TableHeader>Date</TableHeader>
              <TableHeader>Total</TableHeader>
              <TableHeader>Payment Status</TableHeader>
              <TableHeader>Items</TableHeader>
              <TableHeader>Delivery Method</TableHeader>
            </tr>
          </thead>
          <tbody>
            <TableRow>
              <TableData>MacBook Air (M1, 2020)</TableData>
              <TableData>Darrell Steward</TableData>
              <TableData>Apr 10, 08:01 AM</TableData>
              <TableData>$1,099.00</TableData>
              <TableData>Pending</TableData>
              <TableData>1 items</TableData>
              <TableData>Free Shipping</TableData>
            </TableRow>
            {/* Adicione outras linhas aqui conforme necessário */}
          </tbody>
        </OrdersTableContainer>

        <PaginationContainer>
          <div>
            <PaginationButton>Previous</PaginationButton>
            <PaginationButton>1</PaginationButton>
            <PaginationButton>2</PaginationButton>
            <PaginationButton>3</PaginationButton>
            <PaginationButton>Next</PaginationButton>
          </div>
          <div>
            <span>Items per page</span>
            <ItemsPerPage>
              <option>10</option>
              <option>20</option>
              <option>30</option>
            </ItemsPerPage>
          </div>
        </PaginationContainer>
      </Container>
    </>
  );
}


// Header
const HeaderContainer = styled.div`
  background-color: #1a1a1a;
  color: white;
  padding: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderButton = styled.button`
  background-color: #ff6b6b;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

const HeaderIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

// Container
const Container = styled.div`
  padding: 20px;
`;

// OrdersHeader
const OrdersHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const HeaderButtons = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const OrdersHeaderButton = styled.button`
  background-color: #ff6b6b;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

// Stats
const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const StatCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  flex: 1;
  margin: 10px;
  min-width: 150px;
`;

// Filters
const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  background-color: #e0e0e0;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  width: 200px;
`;

// OrdersTable
const OrdersTableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 15px;
  text-align: left;
  background-color: #f0f0f0;
`;

const TableRow = styled.tr`
  &:hover {
    background-color: #f9f9f9;
  }
`;

const TableData = styled.td`
  padding: 15px;
  border-bottom: 1px solid #e0e0e0;
`;

// Pagination
const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  flex-wrap: wrap;
`;

const PaginationButton = styled.button`
  background-color: #e0e0e0;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

const ItemsPerPage = styled.select`
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
`;



export default Contas;
