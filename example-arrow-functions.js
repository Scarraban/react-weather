// var names = ['Sam', 'Andrew', 'Karl', 'Damien'];
//
// names.forEach(function(name) {
//   console.log('forEach:', name);
// });
//
// names.forEach((name) => console.log('arrowFunction:', name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Sam'));

// var person = {
//   name: 'Sam',
//   greet: function() {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
//
// person.greet();

// CHALLENGE
function add(a, b) {
  return a + b;
}

var addStatement = (a, b) => {
  return a + b;
}

var addExpression = (a, b) => a + b;

console.log(addExpression(1,7));
console.log(addStatement(1,3));

// console.log(add(1,3));
// console.log(add(9,0));
