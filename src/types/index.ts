import { LatLngLiteral } from 'leaflet';

interface IWaypoint {
  distance: number;
  hint: string;
  location: [number, number];
  name: string;
}

interface IRouteResponse {
  waypoints: IWaypoint[];
  geometry: string;
}

interface IColumnData {
  key: string;
  name: string;
  dep: LatLngLiteral;
  int: LatLngLiteral;
  dest: LatLngLiteral;
}
export type { IWaypoint, IRouteResponse, IColumnData };
