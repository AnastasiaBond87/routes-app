import { Layout } from 'antd';
import RoutesTable from '../components/RoutesTable';
import { styled } from 'styled-components';
import Map from '../components/Map';

const { Sider } = Layout;

const AppLayout = styled(Layout)`
  min-height: 100vh;
  display: flex;
`;

const SideBar = styled(Sider)`
  display: flex;
  flex-direction: column;
  flex: 0;
  background-color: white !important;
`;

function App() {
  return (
    <AppLayout hasSider>
      <SideBar width={600}>
        <RoutesTable />
      </SideBar>
      <Map />
    </AppLayout>
  );
}

export default App;
