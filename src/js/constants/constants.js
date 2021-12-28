export const SELECTOR = {
  PURCHASE_AMOUNT: {
    CONTAINER: '',
    INPUT: '',
    BUTTON: '',
  },

  PURCHASED_LOTTOS: {
    CONTAINER: '',
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
