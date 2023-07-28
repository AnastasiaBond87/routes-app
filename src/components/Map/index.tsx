import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { styled } from 'styled-components';
import Markers from './Markers';
import { mapURL, attribution } from '../../constants';
import PolyLine from './PolyLine';
import SetMap from './SetMap';

const MapWrapper = styled.div`
  flex: 1;
`;

export default function Map() {
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
