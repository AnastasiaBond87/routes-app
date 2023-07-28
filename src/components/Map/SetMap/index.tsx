import { useMap } from 'react-leaflet';
import { useAppSelector } from '../../../store/hooks';
import { useEffect } from 'react';
import { polyline } from 'leaflet';

export default function SetMap() {
  const { coordinates } = useAppSelector((store) => store.route);
  const map = useMap();

  useEffect(() => {
    if (coordinates) {
      const polyLine = polyline(coordinates);
      map.fitBounds(polyLine.getBounds());
    }
  }, [coordinates, map]);
  return null;
}
