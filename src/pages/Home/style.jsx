import styled from 'styled-components';
import * as CS from '../../styles/CommonStyles';

export const HomeWrap = styled.div`
  padding-top: 64px;
  width: 100%;
  height: 100%;
  background-color: ${CS.color.secondary};
`;

export const TopBtnWrap = styled.div`
  width: 100%;
  max-width: 900px;
  height: 3rem;
  padding: 0.5rem 1rem;
  background-color: ${CS.color.white};
  display: flex;
  position: fixed;
  z-index: 999;
`;

export const BoardWrap = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  background-color: ${CS.color.secondary};
  gap: 0.5rem;
  padding-top: 3.5rem;
  padding-bottom: 6.75rem;
  position: relative;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  background: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: auto;
  z-index: 1500;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

export const MenuItem = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  &:hover {
    background-color: #f7f7f7;
  }
`;
