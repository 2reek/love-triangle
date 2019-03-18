/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation

  let counter = 0; //Начинаем с нулевого положения (первый индекс имеет нудевое положение)
  for ( let i = 0; i < preferences.length; i++) { //СТАРТ - Переменная i в нудевом положении, УСЛОВИЕ - должна быть преференс + 1, ИЗМЕНЕНИЕ - i изменяется на 1
    let nextlove2 = (preferences[i] - 1);
    if (nextlove2 == i) continue;

    let nextlove3 = (preferences[nextlove2] - 1);
    if (nextlove3 == nextlove2) continue;

    let nextlove1 = (preferences[nextlove3] - 1);
    if (nextlove1  == nextlove3) continue;

    if (nextlove1  == i) {counter++};
  };
  return counter / 3;
};

