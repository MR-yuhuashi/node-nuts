// var name = 'Max';
// console.log(name);

// var secondName = name;
// console.log(secondName);

// name = 'Chris';
// console.log(secondName);

// console.log('-------------');

// var person = {
//   name: 'Max',
//   age: 18,
//   hobbies: ['sporting', 'cooking']
// }
// var thirdPerson = {
//   name: 'Max',
//   age: 18,
//   hobbies: ['sporting', 'cooking']
// }

// console.log(person);

// // var secondPerson = person;
// var secondPerson = Object.assign({}, person);

// console.log(secondPerson);

// // console.log(secondPerson === person);

// // var myHobbies = person.hobbies;

// person.name = 'Chris';
// person.hobbies.push('reading');

// console.log(person);
// console.log(secondPerson);
// console.log(thirdPerson);
// var myHobbies = person.hobbies.slice();
// console.log(myHobbies);



const circle = {
  radius: 2,
  area(){
    console.log('draw');
  },
  list: [1, 2]
}

// const another = {};
// for (let key in circle) {
//   another[key] = circle[key];
// }

// const another = Object.assign({}, circle);

const another = {...circle};

circle.radius = 100;
circle.list.push(3);

console.log(another);