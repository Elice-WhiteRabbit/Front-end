import styled from 'styled-components';
import * as CS from '../../styles/CommonStyles';

export const WriteWrap = styled.div`
  width: 100%;
  height: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  padding-top: 64px;
  background-color: ${CS.color.white};
`;

export const Title = styled.div`
  display: flex;
  width: 90%;
  max-width: 900px;
  padding: 0.5rem 0rem;
  gap: 0.5rem;
`;

export const Content = styled.div`
  display: flex;
  width: 90%;
  max-width: 900px;
  padding: 0.5rem 0rem;
  gap: 0.5rem;
`;
