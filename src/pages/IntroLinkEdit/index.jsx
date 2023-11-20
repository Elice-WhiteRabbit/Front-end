import React, { useState } from 'react';
import * as S from './style';
import InputBox from '../../components/common/InputBox';

function LinkEdit() {
  const [form, setForm] = useState({
    inputLinkValue: '',
    inputTitleValue: '',
  });

  const onChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <S.Header></S.Header>

      <InputBox
        text="링크 연결"
        subTextProps={{
          type: 'none',
        }}
        inputProps={{
          value: form['inputLinkValue'],
          handleOnChangeValue: onChange,
          placeholder: 'https://',
          name: 'inputLinkValue',
        }}
        buttonElement={false}
      />

      <InputBox
        text="제목"
        subTextProps={{
          type: 'none',
        }}
        inputProps={{
          value: form['inputTitleValue'],
          handleOnChangeValue: onChange,
          placeholder: '',
          name: 'inputTitleValue',
        }}
        buttonElement={false}
      />
    </>
  );
}

export default LinkEdit;
