import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import L from 'leaflet';
import Markers from './Markers';
import { mapURL, attribution } from '../../constants';
import PolyLine from './PolyLine';
import SetMap from './SetMap';

export default function Map() {
  L.Marker.prototype.options.icon = L.icon({ iconUrl: icon });

  return (
    <MapContainer center={[59.9386, 30.3141]} zoom={12} scrollWheelZoom>
      <TileLayer attribution={attribution} url={mapURL} />
      <PolyLine />
      <Markers />
      <SetMap />
    </MapContainer>
  );
}
