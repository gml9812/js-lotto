import { LOTTO } from '../constants/index.js';

export default class LottoGameModel {
  constructor() {
    this.reset();
  }

  reset() {
    this.lottos = [];
    this.initialMoney = 0;
    this.winningNumbers = {
      mainNumbers: [],
      bonusNumber: 0,
    };
  }

  getLottos() {
    return this.lottos;
  }

  buyLotto(lotto) {
    this.lottos = [...this.lottos, lotto];
    this.initialMoney += LOTTO.PRICE;
  }

  setWinningNumbers(winningNumbers) {
    this.winningNumbers.mainNumbers = winningNumbers.mainNumbers;
    this.winningNumbers.bonusNumber = winningNumbers.bonusNumber;
  }

  getWinnings() {
    let profit = 0;

    const result = {
      place5th: 0,
      place4th: 0,
      place3rd: 0,
      place2nd: 0,
      place1st: 0,
      profitRate: 0,
    };

    this.lottos.forEach((lotto) => {
      const { matchNum, bonusNum } = this.howManyMatchingNum(lotto);

      switch (matchNum) {
        case 3:
          result.place5th += 1;
          profit += LOTTO.PRIZE_5TH;
          break;
        case 4:
          result.place4th += 1;
          profit += LOTTO.PRIZE_4TH;
          break;
        case 5:
          if (bonusNum) {
            result.place2nd += 1;
            profit += LOTTO.PRIZE_2ND;
          } else {
            result.place3rd += 1;
            profit += LOTTO.PRIZE_3RD;
          }
          break;
        case 6:
          result.place1st += 1;
          profit += LOTTO.PRIZE_1ST;
          break;
        default:
          break;
      }
    });
    result.profitRate = Math.floor((profit / this.initialMoney) * 100);

    return result;
  }

  howManyMatchingNum(lotto) {
    const lottoNum = lotto.getNumbers();
    const matchNum = lottoNum.filter((number) => this.winningNumbers.mainNumbers.includes(number)).length;
    const bonusNum = lottoNum.includes(this.winningNumbers.bonusNumber) ? 1 : 0;

    return { matchNum, bonusNum };
  }
}
