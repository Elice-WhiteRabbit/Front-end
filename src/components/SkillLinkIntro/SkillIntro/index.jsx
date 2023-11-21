import React from 'react';
import * as S from './style';
import * as CS from '../../../styles/CommonStyles';
import BasicText from '../../common/BasicText';

function SkillIntro({ text }) {
  return (
    <>
      <S.Container>
        <BasicText
          text={text}
          style={{
            color: CS.color.black,
            font: CS.font.labelSmall,

            padding: '8px 12px',

            border: `1px solid ${CS.color.secondary}`,
            borderRadius: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      </S.Container>
    </>
  );
}

export default SkillIntro;
