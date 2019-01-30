var inquirer = require('inquirer')
inquirer.prompt([
  {
    type: 'confirm',
    name: 'tets',
    message: () => {
      return 'your name is huahua?'
    },
    // validate: (obj) => {
    //   if (obj !== 'aaa') {
    //     console.log('You need to input aaa');
    //     return false
    //   } else {
    //     return true
    //   }
    // },
    filter: (value) => {
      if (typeof value === 'number') {
        return value
      }
      return null
    },
    default: 'taotao',
    choices: [
      '1111',
      '2222'
    ]
  }
]).then(answers => {
  console.log(answers)
})