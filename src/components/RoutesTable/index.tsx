import { Table } from 'antd';
import routes from '../../data/routes.json';
import { columns, data } from '../../constants/table';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { styled } from 'styled-components';
import { setSelectedItem } from '../../store/slices/navSlice';
import { useEffect } from 'react';
import { getCoordinates } from '../../utils/getCoordinates';
import { getRouteFetch } from '../../store/slices/routeSlice';

const Routes = styled(Table)`
  cursor: pointer;

  .ant-table-cell-row-hover {
    background-color: #f5f8fc !important;
  }

  .ant-table-row.active {
    background-color: #aec9f5 !important;
  }
`;

export default function RoutesTable() {
  const dispatch = useAppDispatch();
  const { selectedItem } = useAppSelector((store) => store.nav);

  useEffect(() => {
    if (selectedItem) {
      const currentRoute = routes.find(({ id }) => id === selectedItem);

      if (currentRoute) {
        const { points } = currentRoute;
        const coordinates = getCoordinates(points);
        dispatch(getRouteFetch(coordinates));
      }
    }
  }, [selectedItem, dispatch]);

  return (
    <Routes
      columns={columns}
      dataSource={data}
      pagination={false}
      size="small"
      rowClassName={(record) => (Number(record.key) === selectedItem ? 'active' : '')}
      onRow={(record) => {
        return {
          onClick: () => dispatch(setSelectedItem(Number(record.key))),
        };
      }}
    />
  );
}
