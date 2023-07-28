import { Marker, Popup } from 'react-leaflet';
import { useAppSelector } from '../../../store/hooks';
import Title from 'antd/es/typography/Title';

export default function Markers() {
  const { waypoints } = useAppSelector((store) => store.route);

  if (!waypoints) {
    return null;
  }

  return (
    <>
      {waypoints.map(({ location, hint }, index) => (
        <Marker position={[location[1], location[0]]} key={hint}>
          <Popup>
            <Title level={5}>{`Point#${index + 1}`}</Title>
          </Popup>
        </Marker>
      ))}
    </>
  );
}
