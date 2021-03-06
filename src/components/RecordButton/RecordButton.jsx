import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../animation/microAnimation.json';

import { RecordButtonStyled, MicroIcon, Path, RecordButtonContainer } from './RecordButtonStyled';

export const RecordButton = props => {
  const { isRecord } = props;
  return (
    <RecordButtonContainer>
      {isRecord ? (
        <Lottie
          autoplay
          options={{
            autoplay: true,
            animationData,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice',
            },
          }}
          height="344px"
          width="344px"
        />
      ) : (
        <RecordButtonStyled {...props}>
          <MicroIcon width="28" height="44" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14 11.0851C14 10.7169 13.7049 10.4181 13.3349 10.4181C12.9649 10.4181 12.6698 10.7169 12.6698 11.0851C12.6698 14.2106 10.1265 16.7534 6.99766 16.7534C3.87354 16.7534 1.33021 14.2106 1.33021 11.0851C1.33021 10.7169 1.03513 10.4181 0.665105 10.4181C0.295082 10.4181 0 10.7169 0 11.0851C0 14.7211 2.7822 17.716 6.33255 18.0537V19.9431H3.18501C2.81499 19.9431 2.51522 20.242 2.51522 20.6101C2.51522 20.9783 2.81499 21.2771 3.18501 21.2771H10.815C11.185 21.2771 11.4848 20.9783 11.4848 20.6101C11.4848 20.242 11.185 19.9431 10.815 19.9431H7.66745V18.0537C11.2178 17.716 14 14.7211 14 11.0851ZM5.26008 3.68672C5.26008 2.78743 5.99076 2.05675 6.89006 2.05675H7.1102C8.0095 2.05675 8.74018 2.78743 8.74018 3.68672V11.5111C8.74018 12.4099 8.0095 13.1411 7.1102 13.1411H6.89006C5.99076 13.1411 5.26008 12.4099 5.26008 11.5111V3.68672ZM6.88986 14.4749H7.11C8.74466 14.4749 10.0702 13.1456 10.0702 11.5109V3.68659C10.0702 2.0524 8.74466 0.722656 7.11 0.722656H6.88986C5.2552 0.722656 3.92499 2.0524 3.92499 3.68659V11.5109C3.92499 13.1456 5.2552 14.4749 6.88986 14.4749Z"
            />
          </MicroIcon>
        </RecordButtonStyled>
      )}
    </RecordButtonContainer>
  );
};
