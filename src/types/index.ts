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

export type { IWaypoint, IRouteResponse };
