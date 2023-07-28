import { Layout } from 'antd';
import RoutesTable from '../components/RoutesTable';
import { styled } from 'styled-components';
import { Suspense, lazy, useEffect } from 'react';
import Loader from '../components/Loader';
import { useAppSelector } from '../store/hooks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Map = lazy(() => import('../components/Map'));

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

const MapWrapper = styled.div`
  flex: 1;
  position: relative;
`;

function App() {
  const { isLoading, error } = useAppSelector((store) => store.route);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <AppLayout hasSider>
      <SideBar width={600}>
        <RoutesTable />
      </SideBar>
      <MapWrapper>
        <Suspense fallback={<Loader />}>
          <Map />
        </Suspense>
        {isLoading && <Loader />}
      </MapWrapper>
      <ToastContainer position="top-right" />
    </AppLayout>
  );
}

export default App;
