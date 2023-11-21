import React from 'react';
import * as S from './style';

const SelectBar = ({
  style,
  options = [
    { key: 'apple', value: 'apple', name: '사과' },
    { key: 'banana', value: 'banana', name: '바나나' },
    { key: 'orange', value: 'orange', name: '오렌지' },
  ],
  onChange,
  value,
  name,
}) => {
  return (
    <S.SelectBar style={style} onChange={onChange} value={value} name={name}>
      {options.map((option) => (
        <option key={option.key} value={option.value}>
          {option.name}
        </option>
      ))}
    </S.SelectBar>
  );
};

export default SelectBar;
