export const SELECTOR = {
  PURCHASE_AMOUNT: {
    FORM: '.purchase-amount-form',
    MESSAGE: '.purchase-amount-form__message',
    INPUT: '.purchase-amount-form__input',
    BUTTON: '.purchase-amount-form__button',
  },

  PURCHASED_LOTTOS: {
    CONTAINER: '.purchased-lottos-container',
    LOTTO_LIST: '.purchased-lottos-container__lottolist',
    LOTTO: '.purchased-lottos-container__lotto',
    LOTTO_NUMBERS: '.purchased-lottos-container__lottonumbers',
    SWITCH: '.purchased-lottos-container__switch',
  },

  WINNING_NUMBER: {
    FORM: '.winning-number-form',
    MESSAGE: '.winning-number-form__message',
    MAIN_NUMBER: '.winning-number-form__main-number',
    BONUS_NUMBER: '.winning-number-form__bonus-number',
    BUTTON: '.winning-number-form__button',
  },
};

export const LOTTO = {
  PRICE: 1000,
  SMALLEST_UNIT: 1,
  NUM_COUNT: 6,
  NUM_LEAST: 1,
  NUM_MOST: 45,
};

export const WARNING = {
  INVALID_MONEY_INPUT: `최소 ${LOTTO.PRICE}원 이상의 금액을 입력하세요`,
  LESS_THAN_SMALLEST_UNIT: `${LOTTO.SMALLEST_UNIT}원 이하의 단위는 입력하실 수 없습니다`,
  UNFILLED_WINNING_NUM: `6개 당첨 번호와 보너스 번호를 전부 입력해 주세요!`,
  NUM_NOT_IN_RANGE: `${LOTTO.NUM_LEAST} ~ ${LOTTO.NUM_MOST} 사이의 정수를 입력해 주세요!`,
  DUPLICATE_NUM: `중복되는 당첨 번호가 있어요!`,
};
