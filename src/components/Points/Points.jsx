import React from 'react';
import { useSelector } from 'react-redux';
import { PointsStyled } from './PointsStyled';

export const Points = () => {
  const { maximumRounds, currentRound, maximumTries, currentTry, gameResult } = useSelector(state => {
    return {
      maximumRounds: state.maximumRounds,
      currentRound: state.currentRound,
      maximumTries: state.maximumTries,
      currentTry: state.currentTry,
      gameResult: state.gameResult,
    };
  });

  const points = gameResult.reduce((accumulator, currentValue) => {
    if (currentValue) {
      return accumulator + 1;
    }
    return accumulator;
  }, 0);
  return (
    <PointsStyled>
      My points: {points} Game round: {currentRound - 1}/{maximumRounds}
    </PointsStyled>
  );
};
