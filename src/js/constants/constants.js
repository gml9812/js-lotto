export const SELECTOR = {
  PURCHASE_AMOUNT: {
    CONTAINER: 'purchase-amount-container',
    INPUT: 'purchase-amount-container__input',
    BUTTON: 'purchase-amount-container__button',
  },

  PURCHASED_LOTTOS: {
    CONTAINER: 'purchased-lottos-container',
    SWITCH: 'purchased-lottos-container__switch',
  },

  WINNING_NUMBER: {
    CONTAINER: 'winning-number-container',
    INPUT: 'winning-number-container__input',
    BUTTON: 'winning-number-container__button',
  },
};

export const LOTTO = {
  PRICE: 1000,
  SMALLEST_UNIT: 1,
};

export const WARNING = {
  INVALID_MONEY_INPUT: `최소 ${LOTTO.PRICE}원 이상의 금액을 입력하세요`,
  LESS_THAN_SMALLEST_UNIT: `${LOTTO.SMALLEST_UNIT}원 이하의 단위는 입력하실 수 없습니다`,
};
