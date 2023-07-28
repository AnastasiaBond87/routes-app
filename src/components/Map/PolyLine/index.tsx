import { Polyline, Popup } from 'react-leaflet';
import { useAppSelector } from '../../../store/hooks';

export default function PolyLine() {
  const { coordinates } = useAppSelector((store) => store.route);

  if (!coordinates) {
    return null;
  }

  return (
    <Polyline color={'red'} opacity={0.7} weight={2} positions={coordinates}>
      <Popup>Polygon</Popup>
    </Polyline>
  );
}
