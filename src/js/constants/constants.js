export const SELECTOR = {
  PURCHASE_AMOUNT: {
    FORM: '.purchase-amount-form',
    MESSAGE: '.purchase-amount-form-message',
    INPUT: '.purchase-amount-form__input',
    BUTTON: '.purchase-amount-form__button',
  },

  PURCHASED_LOTTOS: {
    CONTAINER: '.purchased-lottos-container',
    SWITCH: '.purchased-lottos-container__switch',
  },

  WINNING_NUMBER: {
    FORM: '.winning-number-form',
    MESSAGE: 'winning-number-form-message',
    INPUT: '.winning-number-form__input',
    BUTTON: '.winning-number-form__button',
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
