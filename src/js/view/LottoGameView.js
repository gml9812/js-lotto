import { SELECTOR } from '../constants/index.js';
import { $ } from '../utils/index.js';

export default class LottoGameView {
  constructor() {
    this.reset();
  }

  reset() {
    this.disable(SELECTOR.PURCHASE_AMOUNT.BUTTON);
    this.hide(SELECTOR.PURCHASED_LOTTOS.CONTAINER);
    this.hide(SELECTOR.WINNING_NUMBER.FORM);
  }

  show(target) {
    $(target).hidden = false;
  }

  hide(target) {
    $(target).hidden = true;
  }

  enable(target) {
    $(target).disabled = false;
  }

  disable(target) {
    $(target).disabled = true;
  }

  setTargetMessage(target, message) {
    $(target).innerHTML = message;
  }

  renderPurchasedLotto(lottoNumber) {
    this.disable(SELECTOR.PURCHASE_AMOUNT.BUTTON);
    this.disable(SELECTOR.PURCHASE_AMOUNT.INPUT);
    this.show(SELECTOR.PURCHASED_LOTTOS.CONTAINER);

    $(SELECTOR.PURCHASED_LOTTOS.CONTAINER).innerHTML = `
      <div class="d-flex">
        <label class="flex-auto my-0">총 ${lottoNumber}개를 구매하였습니다.</label>
        <div class="flex-auto d-flex justify-end pr-1">
          <label class="switch purchased-lottos-container__switch">
            <input type="checkbox" class="lotto-numbers-toggle-button" />
            <span class="text-base font-normal">번호보기</span>
          </label>
        </div>
      </div>
      <div class="d-flex flex-wrap purchased-lottos-container__lottolist">
        ${this.lottoTemplate().repeat(lottoNumber)}
      </div>
    `;
  }

  lottoTemplate() {
    return `
      <span class="mx-1 text-4xl purchased-lottos-container__lotto d-flex">🎟️ </span>
    `;
  }
}