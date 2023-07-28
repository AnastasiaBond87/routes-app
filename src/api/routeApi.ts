import { IRouteResponse, IWaypoint } from '../types';

const getRoute = async (coordinates: string): Promise<IRouteResponse> => {
  try {
    const res = await fetch(
      `http://router.project-osrm.org/route/v1/driving/${coordinates}?overview=full&geometries=polyline`
    );
    const data = await res.json();

    if (data.code !== 'Ok') {
      throw new Error(data.message);
    }
    const waypoints: IWaypoint[] = data.waypoints;
    const geometry: string = data.routes[0].geometry;

    return { waypoints, geometry };
  } catch (error) {
    const { message } = error as Error;
    throw new Error(message);
  }
};

export { getRoute };
