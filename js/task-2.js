'use strict';

const countProps = function(obj) {
  const total = Object.keys(obj);
  return total.length;
};

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500,})); // 3