import { WARNING, LOTTO } from '../constants/index.js';

const isLessThanMinimum = (moneyInput) => {
  return moneyInput < LOTTO.PRICE;
};

const isLessThanSmallestUnit = (moneyInput) => {
  return !Number.isInteger(moneyInput);
};

export const validateMoneyInput = (moneyInput) => {
  let isValid = true;
  let message = '';

  if (isLessThanMinimum(moneyInput)) {
    isValid = false;
    message = WARNING.INVALID_MONEY_INPUT;
  }
  if (isLessThanSmallestUnit(moneyInput)) {
    isValid = false;
    message = WARNING.LESS_THAN_SMALLEST_UNIT;
  }
  return { isValid, message };
};
