import { Layout } from 'antd';
import RouteList from './components/RouteList';
import { styled } from 'styled-components';
import Map from './components/Map';

const { Sider } = Layout;

const AppLayout = styled(Layout)`
  min-height: 100vh;
  display: flex;
`;

const SideBar = styled(Sider)`
  display: flex;
  flex-direction: column;
  flex: 0;
`;

function App() {
  return (
    <AppLayout hasSider>
      <SideBar width={240} theme="dark">
        <RouteList />
      </SideBar>
      <Map />
    </AppLayout>
  );
}

export default App;
