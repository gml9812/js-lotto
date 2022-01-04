import { LOTTO } from '../constants/index.js';
import { shuffleArray } from '../utils/index.js';

export default class LottoModel {
  constructor() {
    this.setLottoNumbers();
  }

  getNumbers() {
    return this.numbers;
  }

  setLottoNumbers() {
    const possibleNums = [];
    for (let i = LOTTO.NUM_LEAST; i <= LOTTO.NUM_MOST; i += 1) {
      possibleNums.push(i);
    }

    this.numbers = shuffleArray(possibleNums).slice(0, LOTTO.NUM_COUNT);
  }
}
