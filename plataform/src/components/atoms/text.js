// src/components/atoms/Text.js
import styled from 'styled-components';

const Text = styled.p`
  color: ${({ color }) => color || '#666'};
  margin: 0;
`;

export default Text;
