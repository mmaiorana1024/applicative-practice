export function minBy(array, cb) {
  let min;
  let currElement;
  for (let element of array) {
    const cond1 = !min;
    const cond2 = min && cb(element) < min;
    if (cond1 || cond2) {
      min = cb(element);
      currElement = element;
    }
  }
  return currElement;
}

export function maxBy(array, cb) {
  let max;
  let currElement;
  for (let element of array) {
    const cond1 = !max;
    const cond2 = max && cb(element) > max;
    if (cond1 || cond2) {
      max = cb(element);
      currElement = element;
    }
  }
  return currElement;
}
