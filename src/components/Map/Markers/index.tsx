import { Marker } from 'react-leaflet';
import { useAppSelector } from '../../../store/hooks';

export default function Markers() {
  const { waypoints } = useAppSelector((store) => store.route);

  if (!waypoints) {
    return null;
  }

  return (
    <>
      {waypoints.map(({ location, hint }) => (
        <Marker position={[location[1], location[0]]} key={hint} />
      ))}
    </>
  );
}
