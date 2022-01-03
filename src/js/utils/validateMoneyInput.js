import { WARNING, LOTTO } from '../constants/index.js';

const isLessThanMinimum = (moneyNumber) => {
  return moneyNumber < LOTTO.PRICE;
};

const isLessThanSmallestUnit = (moneyNumber) => {
  return !Number.isInteger(moneyNumber);
};

export const validateMoneyInput = (moneyInput) => {
  if (moneyInput === '') {
    return {
      isValid: false,
      message: '',
    };
  }

  const moneyNumber = Number(moneyInput);

  if (isLessThanMinimum(moneyNumber)) {
    return {
      isValid: false,
      message: WARNING.INVALID_MONEY_INPUT,
    };
  }
  if (isLessThanSmallestUnit(moneyNumber)) {
    return {
      isValid: false,
      message: WARNING.LESS_THAN_SMALLEST_UNIT,
    };
  }
  return {
    isValid: true,
    message: '',
  };
};
