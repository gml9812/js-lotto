import { LottoModel, LottoGameModel } from '../model/index.js';
import { LottoGameView } from '../view/index.js';
import { LOTTO, SELECTOR } from '../constants/constants.js';
import { $, validateMoneyInput } from '../utils/index.js';

export default class LottoGameController {
  constructor() {
    this.model = new LottoGameModel();
    this.view = new LottoGameView();
    this.setEvent();
  }

  setEvent() {
    $(SELECTOR.PURCHASE_AMOUNT.FORM).addEventListener('submit', this.handlePurchasedAmount.bind(this));
  }

  // event listener에 화살표 함수 사용할 경우, event는 undefined, this는 LottogameController 클래스.
  // event listener에 그냥 함수 사용할 경우, event는 pointerclickevent, this는 event listener가 부착된 프로퍼티. this.model 접근했을 시 undefined

  // this를 바인드할 경우 this는 LottogameController 유지, this.model 접근 시 제대로 출력.

  //popup message로 처리하는 방식으로 바꾸기. 
  handlePurchasedAmount(event) {
    event.preventDefault();

    const moneyInput = Number($(SELECTOR.PURCHASE_AMOUNT.INPUT).value);

    if (!validateMoneyInput(moneyInput)) return;

    for (let i = 0; i < Math.floor(moneyInput / LOTTO.PRICE); i += 1) {
      const lotto = new LottoModel();
      this.model.buyLotto(lotto);
    }
    this.view.renderPurchasedLotto(this.model.lottoNumber());
  }
}
