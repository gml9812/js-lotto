import { SELECTOR, WARNING } from '../../src/js/constants/index.js';

const inputWinningNumbers = (lottoNum, bonusNum) => {
  cy.get(SELECTOR.WINNING_NUMBER.MAIN_NUMBER).each((mainNumber, idx) => {
    cy.wrap(mainNumber).type(lottoNum[idx]);
  });

  cy.get(SELECTOR.WINNING_NUMBER.BONUS_NUMBER).type(bonusNum);
};

describe('로또 결과 확인 테스트', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get(SELECTOR.PURCHASE_AMOUNT.INPUT).type('3000');
    cy.get(SELECTOR.PURCHASE_AMOUNT.BUTTON).click();
  });

  it('결과 확인 버튼 클릭 시 당첨 통계와 다시하기 버튼이 포함된 모달 창이 표시된다', () => {
    inputWinningNumbers([1,2,3,4,5,6],7);
    cy.get(SELECTOR.WINNING_NUMBER.BUTTON).click();

    cy.get(SELECTOR.RESULT.MODAL).should('be.visible');
    cy.get(SELECTOR.RESULT.CLOSE_BUTTON).should('be.visible');
    cy.get(SELECTOR.RESULT.RESET_BUTTON).shoult('be.visible');
    cy.get(SELECTOR.RESULT.WIN_COUNT).each((winCount) => {
      cy.wrap(winCount)
        .invoke('text')
        .should('match', /^[0-9]+$/);
    });
  });

  /*
  it('일치하는 번호가 5개일 경우 보너스 번호 일치 여부를 확인한다', () => {
    let winningNumbers = []; //5개 일치, 1개 불일치
    let bonusNumber; //나머지 1개와 일치
    inputWinningNumbers(winningNumbers,bonusNumber);
    cy.get(SELECTOR.WINNING_NUMBER.BUTTON).click();
  });
  */

  it('모달 닫기 버튼을 누르면 모달이 닫힌다', () => {
    inputWinningNumbers([1,2,3,4,5,6],7);
    cy.get(SELECTOR.WINNING_NUMBER.BUTTON).click();

    cy.get(SELECTOR.RESULT.CLOSE_BUTTON).click();
    cy.get(SELECTOR.RESULT.MODAL).should('not.be.visible');
  });

  it('다시하기 버튼 클릭 시 로또 게임을 재시작한다', () => {
    cy.get(SELECTOR.RESULT.RESET_BUTTON).click();
    cy.get(SELECTOR.PURCHASE_AMOUNT.FORM).should('exist');
    cy.get(SELECTOR.PURCHASE_AMOUNT.INPUT).should('exist');
    cy.get(SELECTOR.PURCHASE_AMOUNT.BUTTON).should('be.disabled');

    cy.get(SELECTOR.PURCHASED_LOTTOS).should('not.be.visible');
    cy.get(SELECTOR.WINNING_NUMBER).should('not.be.visible');
    cy.get(SELECTOR.RESULT.MODAL).should('not.be.visible');
  });


});