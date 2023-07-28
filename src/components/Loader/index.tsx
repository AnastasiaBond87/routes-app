import { Spin } from 'antd';
import { styled } from 'styled-components';

const Overlay = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
`;

export default function Loader() {
  return (
    <Overlay>
      <Spin size="large" />
    </Overlay>
  );
}
