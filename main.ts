import _ from 'lodash'

console.log(_.upperCase('hellow-world'))

interface User {
  name: string
  age: number
}

const user: User = {
  name: 'Heropy',
  age: 85
}

console.log(user)