import { SELECTOR, WARNING } from '../../src/js/constants/index.js';

const testIncorrectInput = (value, warning) => {
  cy.get(SELECTOR.PURCHASE_AMOUNT.INPUT).type(value);
  cy.get(SELECTOR.PURCHASE_AMOUNT.MESSAGE).should('have.text', warning);
};

describe('로또 구입 금액 입력 테스트', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('페이지 접속 시 로또 구입 금액 입력 창과 disabled 된 버튼을 보여 준다', () => {
    cy.get(SELECTOR.PURCHASE_AMOUNT.FORM).should('exist');
    cy.get(SELECTOR.PURCHASE_AMOUNT.INPUT).should('exist');
    cy.get(SELECTOR.PURCHASE_AMOUNT.BUTTON).should('be.disabled');
  });

  it('로또 1장 가격 이하의 금액이 입력될 경우 warning message를 보여 준다', () => {
    testIncorrectInput('123', WARNING.INVALID_MONEY_INPUT);
  });

  it('최소 화폐단위 이하의 금액이 입력될 경우 warning message를 보여 준다', () => {
    testIncorrectInput('1125.336', WARNING.LESS_THAN_SMALLEST_UNIT);
  });

  it('로또 1장의 가격으로 나누어 떨어지지 않는 금액이 입력될 경우 거슬러 줄 금액을 alert한다', () => {
    const stub = cy.stub();
    cy.on('window:alert', stub);

    cy.get(SELECTOR.PURCHASE_AMOUNT.INPUT).type('4300');
    cy.get(SELECTOR.PURCHASE_AMOUNT.BUTTON).click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('거스름돈 300원 받아가세요');
      });
  });

  it('정상적인 금액이 입력되었을 시 발급된 로또를 보여 주고, input과 button을 disable시킨다', () => {
    cy.get(SELECTOR.PURCHASE_AMOUNT.INPUT).type('2000');
    cy.get(SELECTOR.PURCHASE_AMOUNT.BUTTON).click();
    cy.get(SELECTOR.PURCHASED_LOTTOS.CONTAINER).should('exist');
  });

});