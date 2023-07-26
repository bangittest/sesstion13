//cú pháp khai báo 1 mảng
let arrayInt = [12, 2, 33, 4, 54, 6, 7, 88, 9];
console.log(arrayInt)
let arrayString = ["apple", "banana"]
console.log(arrayString);

//khai báo mảng sử dụng từ khóa new
// let arr = new Array(8)
// console.log(arr)

// lấy ra phần tử tại vị trí index = 7 của mảng arrayInt
console.log("Phan tu tai vi tri index=7 la " + arrayInt[7]);

console.log("phan tu tai vi tri index 1 la " + arrayString[1])

arrayString[3] = "pineapple";


// for i
//for in
for (let item in arrayInt) { // lấy ra lần lượt các chỉ số trong mảng
    // console.log(item)
    console.log(arrayInt[item]);
}

//tính tổng các phần tử trong mảng
let sum = 0;
for (const i in arrayInt) {
    sum += arrayInt[i]

}
console.log(sum)

// tính vị trí thì for in /tính giá trị for of 
//for of
//tính tích của các phần tử
let multi = 1
for (const element of arrayInt) {// duyệt theo phần tử mảng
    multi *= element
    console.log(element)
}
console.log(multi);


//for i
for (let i = 0; i < arrayInt.length; i++) { //duyet vi tri    //array.length độ dài của mảng
    console.log(arrayInt[i]);
    console.log(arrayInt[i]);

}

//in ra nhuwng phaan tu chia het cho 3 trong mang
for (let i = 0; i < arrayInt.length; i++) {
    console.log(i);
    //kiem tra chia het cho 3
    if (i % 2 == 0 && arrayInt[i]) {//i la vi tri cua nó //arrayInt[i] là lấy giá trị trong nó
        console.log(arrayInt[i])
    }
}






let arrayAnimals = [];
//them moi phan tu vao cuoi phan tu cua mang
arrayAnimals.push("dog");
arrayAnimals.push("cat");
arrayAnimals.push("ga");
arrayAnimals.push("lon");
arrayAnimals.push("trau");
arrayAnimals.push("bo");
arrayAnimals.push("dsa");
arrayAnimals.push("do");
arrayAnimals.push("dsda");
console.log(arrayAnimals);
// cách push hoạt động
//["monkey","chicken","human"]
arrayAnimals[arrayAnimals.length] = "cow"
console.log(arrayAnimals)


let arrayAns = ["monkey", "chicked", "human"];
for (let i = 0; i < arrayAns.length; i++) {
    //them lan luot cac phan tu
    arrayAnimals[arrayAnimals.length] = arrayAns[i]
    console.log(arrayAnimals)

}
//i=0:arrayAnimals[arrayAnimals.length] = "monkey"
//i=1:arrayAnimals[arrayAnimals.length] = "chicked"
//i=2:arrayAnimals[arrayAnimals.length] = "human"



// phương thức chuyển mảng thành chuỗi
let arrJoin = [1, 2, 3, 4];
let string = arrJoin.join(" /")
console.log(string)
//đảo ngược các phần tử
console.log(arrJoin.reverse())
//sắp xếp tăng dần/giam dan
arrayInt.sort(function (a, b) {
    return a - b;
})
console.log(arrayInt);


//nối mảng
console.log(arrJoin.concat(arrayInt, [1, 2, 3, 4]));


//lấy và xóa phần tử cuối pop();
let elementDelete = arrayInt.pop()
console.log((arrayInt));
console.log(elementDelete);

//bai tap
let arraydemo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arraydemo.pop();
arraydemo.pop();
arraydemo.pop();
arraydemo.pop();
arraydemo.push(6, 7, 8);
arraydemo.pop();
arraydemo.pop();
let deleteItem = arraydemo.pop();
console.log(arraydemo);
console.log(deleteItem)
// arraydemo =1,2,3,4,5
// deleteItem=6



//shift unshift
arraydemo.unshift(7, 8, 9)
arraydemo.shift();
console.log(arraydemo);


//chuyen ddoi thanh chuoi toString



let arr2side = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arr2side[1][1]);

let arr2 = [[5, 8, 9, 2, 10, 3], [4, 2, 6, 8, 1, 0], [5, 9, 11, 2, 4, 6]];
console.log(arr2)
console.log("===================================");

//duyet mang hai chieu
for (let i = 0; i < arr2.length; i++) { //vong lap ngoai la so hàng
    // arr2[i]--la 1 mang
    for (let j = 0; j < arr2[i].length; j++) {
        console.log(arr2[i][j])
    }
}

//tạo 1 bảng 2 chiều m x n với các phần tử có giá trị ngẫu nhiên từ 1-99
// Math.round(Math.randoom()*98+1)
let m = 10, n = 15;
let arrRandoom = new Array(m);
console.log(arrRandoom);

for (let i = 0; i < m; i++) {
    arrRandoom[i] = new Array(n);
    for (j = 0; j < n; j++) {
        //tạo các phần tử ngẫu nhiên cho từng phần tử
        arrRandoom[i][j] = Math.round(Math.random() * 98 + 1)
    }
}



