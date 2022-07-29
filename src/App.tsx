import './App.css'
import { Header } from './Component/Header'

import styled from 'styled-components'
import { SideBar } from './Component/SideBar';

const StyledApp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap
`;

const StyledDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <StyledApp>
      <Header/>
      <StyledDashboardContainer>
        <SideBar/>
      </StyledDashboardContainer>
    </StyledApp>
  )
}

export default App
