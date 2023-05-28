export function deleteItemFromArray(arr, itemId) {
  arr.splice(arr.findIndex(item => item.id === itemId), 1);
}

export function addItemToArray(arr, item) {
  //Handle addition when item is an update or create
  if (arr.findIndex(arrItem => arrItem.id === item.id) > -1) {
    arr.splice(arr.findIndex(arrItem => arrItem.id === item.id), 1, item);
  } else {
    arr.splice(0, 0, item);
  }
}

export function setAll(obj, val){
  Object.keys(obj).forEach((i) => obj[i] = val);
}