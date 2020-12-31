// 型推論
// 基本の型(number, string, boolean)
// void: 何も返さない
// unknown: どんな型になるかわからない(any型との違いはunknown型を他の変数に代入できない)
// never:
// Enum(定数の集合, 列挙型): あまり使わない
var EnumRole;
(function (EnumRole) {
    EnumRole[EnumRole["ADMIN"] = 0] = "ADMIN";
    EnumRole[EnumRole["READ_ONLY"] = 1] = "READ_ONLY";
    EnumRole[EnumRole["AUTHOR"] = 2] = "AUTHOR";
})(EnumRole || (EnumRole = {}));
// オブジェクトリテラルの型エイリアス
var Role = {
    0: 'admin',
    1: 'read_only',
    2: 'author'
};
var eat;
eat = function (user) {
    console.log(user.name + "\u306F\u98DF\u4E8B\u3092\u3057\u3066\u3044\u307E\u3059\u3002");
    console.log("\u6A29\u9650\u306F" + Role[user.role] + "\u3067\u3059\u3002");
};
var user = {
    name: 'yuya',
    age: 25,
    role: 1
};
eat(user);
// object
var person = {
    name: 'yuya',
    age: 25,
    role: 1
};
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
function add(input1, input2) {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }
    return null;
}
console.log(add(10, 34));
