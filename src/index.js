/**
 * const、letなどの変数宣言
 */

//  var val1 = "var変数";
//  console.log(val1);

//  // var変数は上書き可能
//  val1 = "var変数を上書き";
//  console.log(val1);

//  // 再宣言も可能
//  var val1 = "var変数を再宣言"
//  console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可
// let val2 = "aaa";

// const val3 = "const変数";
// console.log(val3);

// // // const変数は上書き不可能
// // val3 = "const変数を上書き";

// const val3 = "再宣言";

// constで定義したオブジェクトはプロパティの変更は可能
// const val4 = {
//   name:"aaa",
//   age:28,
// };

// val4.name = "bbb"

// val4.adress="ccc";
// console.log(val4);

// constで定義した配列はプロパティの変更は可能
// const val5 =["dog","cat"];
// val5[0]="bird";
// val5.push("monkey");

// console.log(val5);

/**
 * テンプレート文字列
 */
const name = "aaa";
const age = 28;
//「私の名前はaaaです。年齢は28です。」

const message1 = "私の名前は" + name + "です。名前は" + age + "です。";
console.log(message1);

const message2 = `私の名前は${name}です。名前は${age}です。`;
console.log(message2);
