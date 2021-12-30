export default class LottoGameModel {
  constructor() {
    this.reset();
  }

  reset() {
    this.lottos = [];
  }

  lottoNumber() {
    return this.lottos.length;
  }

  buyLotto(lotto) {
    this.lottos = [...this.lottos, lotto];
  }
}
