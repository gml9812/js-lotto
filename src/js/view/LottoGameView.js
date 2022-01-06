import { SELECTOR } from '../constants/index.js';
import { $, $$ } from '../utils/index.js';

export default class LottoGameView {
  constructor() {
    this.reset();
  }

  reset() {
    this.renderPurchaseAmount();
    this.renderWinningNumbers();

    this.hide(SELECTOR.PURCHASED_LOTTOS.CONTAINER);
    this.hide(SELECTOR.WINNING_NUMBER.FORM);
    this.hideModal(SELECTOR.RESULT.MODAL);
  }

  show(target) {
    $(target).hidden = false;
  }

  hide(target) {
    $(target).hidden = true;
  }

  showModal(target) {
    $(target).classList.add('open');
  }

  hideModal(target) {
    $(target).classList.remove('open');
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

  renderPurchaseAmount() {
    $(SELECTOR.PURCHASE_AMOUNT.FORM).innerHTML = `
      <label class="mb-2 d-inline-block"
        >구입할 금액을 입력해주세요.
      </label>
      <div class="purchase-amount-form__message"></div>
      <div class="d-flex">
        <input
          type="number"
          class="w-100 mr-2 pl-2 purchase-amount-form__input"
          placeholder="구입 금액"
        />
        <button type="submit" class="btn btn-cyan purchase-amount-form__button">확인</button>
      </div>
    `;
    this.disable(SELECTOR.PURCHASE_AMOUNT.BUTTON);
  }

  renderPurchasedLotto(lottos) {
    this.disable(SELECTOR.PURCHASE_AMOUNT.BUTTON);
    this.disable(SELECTOR.PURCHASE_AMOUNT.INPUT);

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
    this.show(SELECTOR.PURCHASED_LOTTOS.CONTAINER);
    this.show(SELECTOR.WINNING_NUMBER.FORM);
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

  renderWinningNumbers() {
    $(SELECTOR.WINNING_NUMBER.FORM).innerHTML = `
      <label class="flex-auto d-inline-block mb-3"
        >지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해주세요.</label
      >
      <div class="winning-number-form__message"></div>
      <div class="d-flex">
        <div>
          <h4 class="mt-0 mb-3 text-center">당첨 번호</h4>
          <div>
            <input
              type="number"
              class="winning-number mx-1 text-center winning-number-form__main-number"
            />
            <input
              type="number"
              class="winning-number mx-1 text-center winning-number-form__main-number"
            />
            <input
              type="number"
              class="winning-number mx-1 text-center winning-number-form__main-number"
            />
            <input
              type="number"
              class="winning-number mx-1 text-center winning-number-form__main-number"
            />
            <input
              type="number"
              class="winning-number mx-1 text-center winning-number-form__main-number"
            />
            <input
              type="number"
              class="winning-number mx-1 text-center winning-number-form__main-number"
            />
          </div>
        </div>
        <div class="bonus-number-container flex-grow">
          <h4 class="mt-0 mb-3 text-center">보너스 번호</h4>
          <div class="d-flex justify-center">
            <input type="number" class="bonus-number text-center winning-number-form__bonus-number" />
          </div>
        </div>
      </div>
      <button
        type="button"
        class="open-result-modal-button mt-5 btn btn-cyan w-100 winning-number-form__button"
      >
        결과 확인하기
      </button>
    `;
    this.disable(SELECTOR.WINNING_NUMBER.BUTTON);
  }

  renderModal(winnings) {
    $(SELECTOR.RESULT.MODAL).innerHTML = `
    <div class="modal-inner p-10">
      <div class="modal-close result-modal__close-button">
        <svg viewbox="0 0 40 40">
          <path class="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
        </svg>
      </div>

      <h2 class="text-center">🏆 당첨 통계 🏆</h2>
      <div class="d-flex justify-center">
        <table class="result-table border-collapse border border-black result-modal__table">
          <thead>
            <tr class="text-center">
              <th class="p-3">일치 갯수</th>
              <th class="p-3">당첨금</th>
              <th class="p-3">당첨 갯수</th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-center">
              <td class="p-3">3개</td>
              <td class="p-3">5,000</td>
              <td class="p-3 result-modal__win-count">${winnings.place5th}개</td>
            </tr>
            <tr class="text-center">
              <td class="p-3">4개</td>
              <td class="p-3">50,000</td>
              <td class="p-3 result-modal__win-count">${winnings.place4th}개</td>
            </tr>
            <tr class="text-center">
              <td class="p-3">5개</td>
              <td class="p-3">1,500,000</td>
              <td class="p-3 result-modal__win-count">${winnings.place3rd}개</td>
            </tr>
            <tr class="text-center">
              <td class="p-3">5개 + 보너스볼</td>
              <td class="p-3">30,000,000</td>
              <td class="p-3 result-modal__win-count">${winnings.place2nd}개</td>
            </tr>
            <tr class="text-center">
              <td class="p-3">6개</td>
              <td class="p-3">2,000,000,000</td>
              <td class="p-3 result-modal__win-count">${winnings.place1st}개</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-center font-bold">당신의 총 수익률은 ${winnings.profitRate}%입니다.</p>
      <div class="d-flex justify-center mt-5">
        <button type="button" class="btn btn-cyan result-modal__reset-button">다시 시작하기</button>
      </div>
    </div>
    `;
  }
}
