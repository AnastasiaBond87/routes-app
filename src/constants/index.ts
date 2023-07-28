const mapURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

enum ReducerNames {
  nav = 'nav',
  route = 'route',
}

export { ReducerNames, mapURL, attribution };
