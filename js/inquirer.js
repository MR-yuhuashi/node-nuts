var inquirer = require('inquirer')
inquirer.prompt([
  {
    type: 'list',
    name: 'cities',
    message: () => {
      return 'list city:'
    },
    default: 1,
    choices: [
      {
        key: 'w',
        name: 'wuhan'
      },
      {
        key: 'z',
        name: 'zhengzhou'
      },
      new inquirer.Separator(),
      {
        key: 's',
        name: 'shanghai'
      },
      {
        key: 'b',
        name: 'beijing'
      },
      {
        key: 'f',
        name: 'hefei'
      }
    ]
  },{
    type: 'input',
      name: 'counts',
      message: () => {
        return 'number is ?'
      },
      validate: (obj) => {
        if (obj !== 'aaa') {
          console.log('You need to input aaa');
          return true
        } else {
          return false
        }
      },
      filter: (value) => {
        if (typeof value === '123456') {
          return value
        }
        return null
      },
      default: 1,
  },{
    type: 'confirm',
      name: 'ends',
      message: () => {
        return 'are you ok?'
      },
      default: true,
  }
]).then((answers) => {
  console.log(answers)
})

// .prompt([{
//   type: 'input',
//     name: 'counts',
//     message: () => {
//       return 'number is ?'
//     },
//     validate: (obj) => {
//       if (obj !== 'aaa') {
//         console.log('You need to input aaa');
//         return true
//       } else {
//         return false
//       }
//     },
//     filter: (value) => {
//       if (typeof value === '123456') {
//         return value
//       }
//       return null
//     },
//     default: 1,
// }]).prompt([{
//   type: 'confirm',
//     name: 'ends',
//     message: () => {
//       return 'are you ok?'
//     },
//     default: true,
// }])