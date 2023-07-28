import { ColumnsType } from 'antd/es/table';
import { IColumnData } from '../types';
import TableCell from '../components/RouteList/TableCell';
import { AnyObject } from 'antd/es/_util/type';

const columns: ColumnsType<AnyObject> = [
  {
    title: 'Route',
    dataIndex: 'name',
    key: 'route',
  },
  {
    title: 'Point #1 (lat,lng)',
    dataIndex: 'dep',
    key: 'point#1',
    render: ({ lat, lng }) => <TableCell lat={lat} lng={lng} />,
  },
  {
    title: 'Point #2 (lat,lng)',
    dataIndex: 'int',
    key: 'point#2',
    render: ({ lat, lng }) => <TableCell lat={lat} lng={lng} />,
  },
  {
    title: 'Point #3 (lat,lng)',
    dataIndex: 'dest',
    key: 'point#3',
    render: ({ lat, lng }) => <TableCell lat={lat} lng={lng} />,
  },
];

const data: IColumnData[] = [
  {
    key: '1',
    name: 'Route #1',
    dep: { lat: 59.84660399, lng: 30.29496392 },
    int: { lat: 59.82934196, lng: 30.42423701 },
    dest: { lat: 59.83567701, lng: 30.38064206 },
  },
  {
    key: '2',
    name: 'Route #2',
    dep: { lat: 59.82934196, lng: 30.42423701 },
    int: { lat: 59.82761295, lng: 30.41705607 },
    dest: { lat: 59.84660399, lng: 30.29496392 },
  },
  {
    key: '3',
    name: 'Route #3',
    dep: { lat: 59.83567701, lng: 30.38064206 },
    int: { lat: 59.84660399, lng: 30.29496392 },
    dest: { lat: 59.82761295, lng: 30.41705607 },
  },
];

export { columns, data };
