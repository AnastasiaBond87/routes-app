import { MapContainer, TileLayer } from 'react-leaflet';
import routes from '../../data/routes.json';
import 'leaflet/dist/leaflet.css';
import { styled } from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useEffect } from 'react';
import { getRouteFetch } from '../../store/slices/routeSlice';
import Markers from './Markers';
import { mapURL, attribution } from '../../constants';
import PolyLine from './PolyLine';
import { getCoordinates } from '../../utils/getCoordinates';
import SetMap from './SetMap';

const MapWrapper = styled.div`
  flex: 1;
`;

export default function Map() {
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
    <MapWrapper>
      <MapContainer center={[59.9386, 30.3141]} zoom={12} scrollWheelZoom>
        <TileLayer attribution={attribution} url={mapURL} />
        <PolyLine />
        <Markers />
        <SetMap />
      </MapContainer>
    </MapWrapper>
  );
}
