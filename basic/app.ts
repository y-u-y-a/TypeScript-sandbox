// 型推論
// 基本の型(number, string, boolean)
// void: 何も返さない
// unknown: どんな型になるかわからない(any型との違いはunknown型を他の変数に代入できない)
// never:


// エイリアス型(型のまとまりを指定, オブジェクト型に命名でよく使う)
type Combinable = number | string
type OneToFive = 1 | 2 | 3 | 4 | 5;
type Bools = true | false;
type User = { name: string; age: number; role: number; }
// Enum(定数の集合, 列挙型): あまり使わない
enum EnumRole {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
// オブジェクトリテラルの型エイリアス
const Role = {
  0: 'admin',
  1: 'read_only',
  2: 'author',
} as const

let eat: Function
eat = (user: User) => {
  console.log(`${user.name}は食事をしています。`)
  console.log(`権限は${Role[user.role]}です。`)
}
const user: User = {
  name: 'yuya',
  age: 25,
  role: 1
}
eat(user)

// object
const person = {
  name: 'yuya',
  age: 25,
  role: 1,
}
// ネストしたobject
// let product: {
//   price: number
//   tags: string[],
//   details: {
//     title: string
//     brand: string
//   }
// }
// product = {
//   price: 1500,
//   tags: ['new', 'blue'],
//   details: {
//     title: 'Blue Carpet',
//     brand: 'abc company'
//   }
// }
// Array
// let user: string[]
// user = ['yuya', 'aaa']
// Tuple(要素の長さが固定されたarray)
// let role: [number, string]
// role = [2, 'author']

// Union(複数の型を許容)
function add(input1: Combinable, input2: Combinable) {
  if(typeof input1 === 'number' && typeof input2 === 'number') {
    return input1 + input2
  }
  return null
}
console.log(add(10, 34))
