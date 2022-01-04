export default class LottoGameModel {
  constructor() {
    this.reset();
  }

  reset() {
    this.lottos = [];
  }

  getLottos() {
    return this.lottos;
  }

  buyLotto(lotto) {
    this.lottos = [...this.lottos, lotto];
  }
}
