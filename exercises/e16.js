// see e16.md

export function find(array, callback) {
  let returnElement;
  for (let element of array) {
    if (callback(element)) {
      returnElement = element;
      break;
    }
  }
  return returnElement;
}
