import React, { useState } from 'react';
import { InputStyled, InputBox, SearchIcon, Stripe } from './InputStyled';

export const Input = () => {
  const [focus, setFocus] = useState(false);

  return (
    <InputBox>
      <InputStyled
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder="Input lyrics or songname or not"
      />
      <SearchIcon width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.0664 14.3656C10.4118 14.3656 8.9109 13.7017 7.81381 12.6236C7.81231 12.6236 7.81181 12.6186 7.81032 12.6186C7.80782 12.6186 7.80433 12.6136 7.80183 12.6136C6.68378 11.5105 5.98849 9.97822 5.98849 8.29115C5.98849 4.937 8.71524 2.21175 12.0664 2.21175C15.4176 2.21175 18.1443 4.937 18.1443 8.29115C18.1443 11.6403 15.4176 14.3656 12.0664 14.3656ZM12.0664 0.714355C7.88967 0.714355 4.4911 4.11343 4.4911 8.29115C4.4911 10.128 5.15045 11.815 6.24304 13.1277L1.07655 18.2937C0.784055 18.5882 0.784055 19.0574 1.07655 19.3519C1.22279 19.4966 1.41446 19.5715 1.60612 19.5715C1.79779 19.5715 1.98896 19.4966 2.1352 19.3519L7.31068 14.1759C8.61192 15.2291 10.266 15.863 12.0664 15.863C16.2436 15.863 19.6417 12.4639 19.6417 8.29115C19.6417 4.11343 16.2436 0.714355 12.0664 0.714355V0.714355Z"
          fill="#828385"
        />
      </SearchIcon>
      <Stripe focus={focus} />
    </InputBox>
  );
};
