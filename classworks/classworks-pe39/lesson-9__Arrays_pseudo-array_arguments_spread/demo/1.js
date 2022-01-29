const array = ['hello', 'world'];

array.forEach((element, index, arrayRef) => {
  console.log(`Element: ${element}, index: ${index}`);
  console.log(arrayRef);
});
