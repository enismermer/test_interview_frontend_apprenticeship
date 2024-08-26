function getEvenNumbers(array) {
  return array.filter((number) => number % 2 === 0);
}

const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = getEvenNumbers(tab);

console.log(evenNumbers);
