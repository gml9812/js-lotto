export const shuffleArray = (array) => {
  let arrLen = array.length;
  let target;

  while (arrLen) {
    target = Math.floor(Math.random() * arrLen);
    arrLen -= 1;

    [array[target], array[arrLen]] = [array[arrLen], array[target]];
  }
  return array;
};
