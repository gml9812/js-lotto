import { SELECTOR } from '../../src/js/constants/index.js';
  
describe('구입한 로또 테스트', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get(SELECTOR.PURCHASE_AMOUNT.INPUT).type('3000');
    cy.get(SELECTOR.PURCHASE_AMOUNT.BUTTON).click();
  });
  
  it('주어진 금액에 맞는 숫자의 로또가 발급된다', () => {
    cy.get(SELECTOR.PURCHASED_LOTTOS.LOTTO)
      .should('have.length', 3);
  });

  it('번호 보기 토글을 누르면 1~45 사이의 중복되지 않는 정수 6개로 구성된 로또 번호를 확인할 수 있다', () => {
    cy.get(SELECTOR.PURCHASED_LOTTOS.SWITCH).click();

    cy.get(SELECTOR.PURCHASED_LOTTOS.LOTTO_NUMBERS)
      .each((lottoNumbers) => {
        const lottoNumberList = lottoNumbers
          .text()
          .split(' ')
          .map((number) => number.trim());
        expect(lottoNumberList.length).to.be.eq(6);

        lottoNumberList.forEach((_number) => {
          const number = Number(_number);
          expect(number).to.be.at.least(1);
          expect(number).to.be.at.most(45);
        });

        const lottoNumberSet = new Set(lottoNumberList);
        expect(lottoNumberSet.length).to.be.eq(lottoNumberList.length);
      });
  });
});
