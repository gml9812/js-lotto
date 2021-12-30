import { WARNING, LOTTO } from '../constants/index.js';

const isLessThanMinimum = (moneyInput) => {
  return moneyInput < LOTTO.PRICE;
};

const isLessThanSmallestUnit = (moneyInput) => {
  return !Number.isInteger(moneyInput);
};

const isChangeExist = (moneyInput) => {
  return moneyInput % LOTTO.PRICE !== 0;
};

export const validateMoneyInput = (moneyInput) => {
  if (isLessThanMinimum(moneyInput)) {
    alert(WARNING.INVALID_MONEY_INPUT);
    return false;
  }
  if (isLessThanSmallestUnit(moneyInput)) {
    alert(WARNING.LESS_THAN_SMALLEST_UNIT);
    return false;
  }
  if (isChangeExist(moneyInput)) {
    alert(`거스름돈 ${moneyInput % LOTTO.PRICE}원 받아가세요`);
  }
  return true;
};
