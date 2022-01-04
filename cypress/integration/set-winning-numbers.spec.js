import { SELECTOR, WARNING } from '../../src/js/constants/index.js';

const inputWinningNumbers = (lottoNum, bonusNum) => {
  cy.get(SELECTOR.WINNING_NUMBER.MAIN_NUMBER).each((mainNumber, idx) => {
    cy.wrap(mainNumber).type(lottoNum[idx]);
  });

  cy.get(SELECTOR.WINNING_NUMBER.BONUS_NUMBER).type(bonusNum);
};

describe('로또 당첨 번호 입력 테스트', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get(SELECTOR.PURCHASE_AMOUNT.INPUT).type('3000');
    cy.get(SELECTOR.PURCHASE_AMOUNT.BUTTON).click();
  });

  it('6개의 당첨 번호와 1개의 보너스 번호 중 하나라도 입력되지 않았을 경우 warning messege를 보여 준다', () => {
    cy.get(SELECTOR.WINNING_NUMBER.MAIN_NUMBER).eq(0).type('15');
    cy.get(SELECTOR.WINNING_NUMBER.MAIN_NUMBER).eq(5).type('12');
    cy.get(SELECTOR.WINNING_NUMBER.MAIN_NUMBER).eq(6).type('21');

    cy.get(SELECTOR.WINNING_NUMBER.MESSAGE).should('have.text', WARNING.UNFILLED_WINNING_NUM);
  });
  
  it('1~45 사이의 정수가 아닌 값이 입력될 경우 warning messege를 보여 준다', () => {
    inputWinningNumbers([7, 29, 0, 33, -21, 31], 44);

    cy.get(SELECTOR.WINNING_NUMBER.MESSAGE).should('have.text', WARNING.NUM_NOT_IN_RANGE);
  });

  it('중복된 값이 입력될 경우 warning messege를 보여 준다', () => {
    inputWinningNumbers([7, 29, 33, 33, 21, 31], 44);

    cy.get(SELECTOR.WINNING_NUMBER.MESSAGE).should('have.text', WARNING.DUPLICATE_NUM);
  }); 

  it('올바른 당첨 번호를 입력하면 결과 확인하기 버튼이 활성화된다.', () => {
    inputWinningNumbers([7, 29, 33, 34, 21, 31], 44);

    cy.get(SELECTOR.WINNING_NUMBER.BUTTON).should('not.be.disabled');
  });
});