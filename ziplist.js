const listTest1 = ['a', 'b', 'c'];
const listTest2 = [1, 2, 3];

function zipList(list1, list2) {
  const resultingList = [];
  for (let i = 0; i < list1.length; i++) {
    resultingList.push(list1[i], list2[i]);
  }
  return resultingList;
}
console.log(zipList(listTest1, listTest2));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}
console.log(zipListTheSimpleWay(listTest1, listTest2));
