import { WARNING } from '../constants/index.js';

const isEmpty = (winningNumberInput) => {
  const reduced = winningNumberInput.reduce((acc, winningNumber) => acc + winningNumber, '');
  if (reduced === '') return true;
  return false;
};

const isNotFullyFilled = (winningNumberInput) => {
  return winningNumberInput.includes('');
};

const isNotInRange = (winningNumberInput) => {
  return winningNumberInput.find((winningNumber) => winningNumber < 1 || winningNumber > 45);
};

const isWithDuplicate = (winningNumberInput) => {
  const winningNumberSet = new Set(winningNumberInput);
  return winningNumberInput.length !== winningNumberSet.size;
};

export const validateWinningNumberInput = (winningNumberInput) => {
  if (isEmpty(winningNumberInput)) {
    return {
      isValid: false,
      message: '',
    };
  }
  if (isNotFullyFilled(winningNumberInput)) {
    return {
      isValid: false,
      message: WARNING.UNFILLED_WINNING_NUM,
    };
  }
  if (isNotInRange(winningNumberInput)) {
    return {
      isValid: false,
      message: WARNING.NUM_NOT_IN_RANGE,
    };
  }
  if (isWithDuplicate(winningNumberInput)) {
    return {
      isValid: false,
      message: WARNING.DUPLICATE_NUM,
    };
  }
  return {
    isValid: true,
    message: '',
  };
};
