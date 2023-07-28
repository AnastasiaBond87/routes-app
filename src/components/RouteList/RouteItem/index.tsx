import Item from 'antd/es/list/Item';
import Paragraph from 'antd/es/typography/Paragraph';
import { styled } from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setSelectedItem } from '../../../store/slices/navSlice';

interface IRouteItemProps {
  id: number;
  points: number[][];
}

const ListItem = styled(Item)`
  cursor: pointer;
  transition: all 0.5s;
  &:not(:last-child) {
    border-bottom: 1px solid rgba(205, 209, 208, 0.3) !important;
  }

  .ant-list-item-meta {
    .ant-list-item-meta-title,
    .ant-list-item-meta-description {
      color: rgba(205, 209, 208) !important;
    }
  }

  .ant-list-item-meta.active {
    .ant-list-item-meta-title {
      color: rgb(3, 53, 252) !important;
    }
  }
  .ant-typography {
    color: rgba(205, 209, 208) !important;
  }
`;

export default function RouteItem({ id, points }: IRouteItemProps) {
  const dispatch = useAppDispatch();
  const { selectedItem } = useAppSelector((store) => store.nav);

  const selectItem = (itemId: number) => {
    dispatch(setSelectedItem(itemId));
  };

  return (
    <ListItem onClick={() => selectItem(id)}>
      <Item.Meta
        title={`Route#${id}`}
        className={id === selectedItem ? 'active' : ''}
        description="Coordinates:"
      />
      {points.map(([lat, lng]) => (
        <Paragraph key={lat.toString()}>{`${lat}, ${lng}`}</Paragraph>
      ))}
    </ListItem>
  );
}
