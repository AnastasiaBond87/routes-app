import { List } from 'antd';
import routes from '../../data/routes.json';
import RouteItem from './RouteItem';

export default function RouteList() {
  return (
    <List
      size="small"
      itemLayout="vertical"
      dataSource={routes}
      renderItem={({ id, points }) => <RouteItem key={id.toString()} id={id} points={points} />}
    />
  );
}
