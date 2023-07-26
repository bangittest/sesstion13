// Bài 2: Viết một chương trình nhận một
// số nhập vào và chèn dấu(_) giữa 2 số chẵn.

// Ví dụ nếu bạn nhập vào 245468 thì kết quả
// của chương trình sẽ là 2 - 454 - 6 - 8
//b1 cho người dùng nhập vào 1 chuốix số
//b2 chuyển đổi chuỗi thành mảng theo điều kiện là [2,454,6,8]
//b3 dùng jojn để nối dấu

// chuỗi string
// let string = "245468"

// let arr = [];
// for (let i = 0; i < string.length; i++) {
//     // console.log(string.charAt(i)%2==0);
//     if (string.charAt(i) % 2 == 0 && string.charAt(i + 1) % 2 == 0) {
//         arr.push(string.charAt(i));
//     } else {
//         let temp = "";
//         for (let j = i + 1; j < string.length - 1; j++) {
//             temp += string.charAt(j);
//             if (string.charAt(j) % 2 == 0 && string.charAt(j + 1) % 2 == 0) {
//                 i = j;
//                 break;
//             }
//         }
//         arr.push(temp)
//     }

// }
// console.log(arr.join("-"));


let string = prompt("nhap 1 so")
let arr = [];
for (let i = 0; i < string.length; i++) {

}