import { Marker, Popup } from 'react-leaflet';
import { useAppSelector } from '../../../store/hooks';
import MarkerIcon from '../../../assets/icons/marker-blue.svg';
import L from 'leaflet';
import Title from 'antd/es/typography/Title';

export default function Markers() {
  const { waypoints } = useAppSelector((store) => store.route);

  const Icon = L.icon({
    iconUrl: MarkerIcon,
    iconSize: [50, 50],
    iconAnchor: [25, 50],
  });

  if (!waypoints) {
    return null;
  }

  return (
    <>
      {waypoints.map(({ location, hint }, index) => (
        <Marker position={[location[1], location[0]]} key={hint} icon={Icon}>
          <Popup>
            <Title level={5}>{`Point#${index + 1}`}</Title>
          </Popup>
        </Marker>
      ))}
    </>
  );
}
