// const food = "メロンパン";
// const drink = "牛乳";

// //  文字列と変数を結合する従来の方法
// const message1 = "朝ごはんは" + drink + "と" + food + "です！";
// console.log(message1);
// const message2 = `朝ごはんは${drink}と${food}です！`;
// console.log(message2);

/**
 * アロー関数
 */

//  従来の関数
// function func1(str) {
//   return str;
// }
// console.log(func1("hello!"));

// // 変数に関数を入れることもできる
// const func2 = function (str) {
//   return str;
// };
// console.log(func2("Hello!!"));

// // アロー関数(=>がアロー！)
// const func3 = (str) => {
//   return str;
// };
// console.log(func3("hello!!!"));

// // 引数の()は省略することも可能だが、フォーマッターで直される
// const func4 = (str) => {
//   return str;
// };
// console.log(func4("hello!!!!"));

// // 返すものが一行で済む場合は{}でreturnを書く必要がない
// const func5 = (str) => str;

// console.log(func5("hello!!!!!"));

// const add = (num1, num2) => num1 + num2;

// console.log(add(1, 1));

/**
 * 分割代入
 */
// 分割しないやり方
// const breakfast = {
//   food:"メロンパン",
//   drink:"牛乳",
// }

// const message1 = `朝ごはんは${breakfast.drink}と${breakfast.food}です！`
// console.log(message1)
// ↑この書き方だと、変数名が長かった時や項目が多かったりすると大変…

// 分割代入！
// 使いたい項目を予め、定義？しておく(指定のプロパティを抜き出す)
// const {food, drink = "お茶"} = breakfast;
// const message2 = `朝ごはんは${drink}と${food}です！`
// console.log(message2)

// 配列でも分割代入が可能
// 分割しない方法
// const breakfast_list = ["メロンパン","牛乳"]
// const message3 = `朝ごはんは${breakfast_list[0]}と${breakfast_list[1]}です！`
// console.log(message3)

// // 分割代入
// const [food,drink] = breakfast_list;
// const message4 = `朝ごはんは${drink}と${food}です！`
// console.log(message4)

/**
 * デフォルト値
 */
// 引数の後に＝値とするとデフォルト値を設定できる
// 分割代入のときでも使える
// const sayHello = (name = "mickey") => console.log(`hello,${name}!`);
// sayHello("pooh")
// sayHello()

/**
 * スプレット構文 ...
 * 色んな用途アリ
 */

//  配列の展開(1つずつ順番に展開してくれる！)
// const arr1 = [1,2]
// console.log(arr1)
// console.log(...arr1)
// const add = (num1,num2) => num1 + num2;
// console.log(add(...arr1))

// // 配列をまとめる(分割代入とよく一緒に使われる)
// const arr2 = [1,2,3,4,5]
// const[num1,num2,...arr3] = arr2
// console.log(arr3)

// // 配列のコピー、結合
// // コピーの際に代入をすると参照渡し(参照している先が一緒)となり、不具合の元
// const arr4 = [10, 20];
// const arr5 = [20, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// // 参照元が変わらない！
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// // イコールにするとコピーした元の値も変わってしまう例
// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 * 従来のループ処理を使わなくて済む
 */

// const nameArr = ["mickey", "minne", "pooh"];

// //  従来はこのようにitemを取り出していた
//  for (let index = 0; index <nameArr.length; index++)
//   console.log(`${index+1}番目は${nameArr[index]}`);

// // map(配列に関して使える関数)
// // mapは新しく配列を作ることもできるし、配列の中を処理することもできる
// const nameArr2 = nameArr.map((name) => name);
// console.log(nameArr2);

// const nameArr3 = nameArr.map((name, index) =>
//   console.log(`${index + 1}番目は${name}です`)
// );

// mapで項目によって異なる処理をする場合
// const newNameArr = nameArr.map((name) => {
//   if (name === "mickey") {
//     return `${name}さん`
//   } else {
//     return name
//   }
// });
// console.log(newNameArr)

/**
 * 三項演算子
 */
// const val1 = 1 > 0 ? "true" : "false";
// console.log(val1);

// const num = 12345;
// // toLocaleStringは数字にカンマを入れる
// console.log(num.toLocaleString);

// const formatNum =
//   typeof num === "number" ? num.toLocaleString() : "数字を入力してね";
// console.log(formatNum);

// メソッドで返すときにも三項演算子は使う
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "over100" : "under100";
// };
// console.log(checkSum(100, 0));

/**
 * 論理演算子　\\ &&
 */
// 一般的な使い方
// const flag1 = true;
// const flag2 = true;

// if (flag1 || flag2) {
//   console.log("1or2");
// }

// if (flag1 && flag2) {
//   console.log("1and2");
// }

/**
 * ||の使い方
 * ||の左側がflaseなら右側を返す
 *  trueの場合はそのまま値を返す
 * */

// const num = 100;
// const fee = num || "please input number";
// console.log(fee);

/**
 * $&の使い方
 * &&は左側がtrueなら左側を返す
 * falseの場合はそのまま値を返す
 *  */
// const num2 = 123;
// const fee2 = num2 && "value ok!";
// console.log(fee2);
