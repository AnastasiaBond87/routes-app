import Paragraph from 'antd/es/typography/Paragraph';
import { LatLngLiteral } from 'leaflet';

export default function TableCell({ lat, lng }: LatLngLiteral) {
  return (
    <>
      <Paragraph>{lat}</Paragraph>
      <Paragraph>{lng}</Paragraph>
    </>
  );
}
