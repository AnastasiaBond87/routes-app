import polyline from '@mapbox/polyline';
import { LatLng, latLng as leafletLatLng } from 'leaflet';

const getLatLang = (geometry: string): LatLng[] => {
  const decoded = polyline.decode(geometry);
  const latLng = decoded.map((element) => leafletLatLng(element[0], element[1]));

  return latLng;
};

export { getLatLang };
