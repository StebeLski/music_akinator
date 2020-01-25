import React from 'react';
import { useSelector } from 'react-redux';
import { PointsStyled } from './PointsStyled';

export const Points = () => {
  const { maximumRounds, currentRound, maximumTries, currentTry } = useSelector(state => {
    return {
      maximumRounds: state.maximumRounds,
      currentRound: state.currentRound,
      maximumTries: state.maximumTries,
      currentTry: state.currentTry,
    };
  });
  return (
    <PointsStyled>
      My points: {currentRound}/{maximumRounds}
    </PointsStyled>
  );
};
