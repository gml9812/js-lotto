import { SELECTOR } from '../constants/index.js';
import { $, $$ } from '../utils/index.js';

export default class LottoGameView {
  constructor() {
    this.reset();
  }

  reset() {
    this.disable(SELECTOR.PURCHASE_AMOUNT.BUTTON);
    this.disable(SELECTOR.WINNING_NUMBER.BUTTON);
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

  alertMessage(message) {
    alert(message);
  }

  renderPurchasedLotto(lottos) {
    this.disable(SELECTOR.PURCHASE_AMOUNT.BUTTON);
    this.disable(SELECTOR.PURCHASE_AMOUNT.INPUT);
    this.show(SELECTOR.PURCHASED_LOTTOS.CONTAINER);
    this.show(SELECTOR.WINNING_NUMBER.FORM);

    $(SELECTOR.PURCHASED_LOTTOS.CONTAINER).innerHTML = `
      <div class="d-flex">
        <label class="flex-auto my-0">총 ${lottos.length}개를 구매하였습니다.</label>
        <div class="flex-auto d-flex justify-end pr-1">
          <label class="switch purchased-lottos-container__switch">
            <input type="checkbox" class="lotto-numbers-toggle-button" />
            <span class="text-base font-normal">번호보기</span>
          </label>
        </div>
      </div>
      <div class="d-flex flex-wrap purchased-lottos-container__lottolist">
        ${lottos.map((lotto) => this.lottoTemplate(lotto)).join('')}
      </div>
    `;
  }

  lottoTemplate(lotto) {
    return `
      <span class="mx-1 text-4xl purchased-lottos-container__lotto d-flex">🎟️ 
        <div class="purchased-lottos-container__lottonumbers" hidden>
          ${lotto.getNumbers().join(' ')}
        </div>
      </span>
    `;
  }

  toggleLottoNumbers() {
    $$(SELECTOR.PURCHASED_LOTTOS.LOTTO_NUMBERS).forEach((numbers) => {
      numbers.hidden = !numbers.hidden;
    })
  }
}