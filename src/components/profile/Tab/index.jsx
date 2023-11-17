import React from 'react';
import * as S from './style';
import * as CS from '../../../styles/CommonStyles';
import BasicText from '../../common/BasicText';

const Tab = ({ text, isCountable, isActive, onClick }) => {
  return (
    <>
      <S.Tab onClick={onClick} isActive={isActive}>
        <BasicText
          text={text}
          color={isActive ? CS.color.black : CS.color.contentTertiary}
        />
        {isCountable && (
          <BasicText
            text={'0'}
            color={isActive ? CS.color.black : CS.color.contentTertiary}
          />
        )}
      </S.Tab>
    </>
  );
};

export default Tab;