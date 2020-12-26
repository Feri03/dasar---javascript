// Manipulasi array

// menambahkan isi array 
// var arr = [];
// arr [0] = "Feri";
// arr [2] = "Irawan";
// arr [3] = "Novi";
// arr [6] = "Agile";
// console.log(arr);





// menghapus isi array 
// var arr = ["Feri", "Irawan", "Agile"];
// arr[1] = undefined;
// console.log(arr);




// menapilkan isi array length
// var arr = ["Feri", "Irawan", "Agile", "Rama"];

// for(var i = 0; i < arr.length; i++){
//     console.log(('Mahasiswa ke-' + (i + 1) + ' :' + arr[i]));
// }









// var arr = ["Feri", "Irawan", "Agile"];
// 1.join 
// console.log(arr.join(' - '));

// 2. push & pop
// arr.push('Doddy'); // menambah
// arr.pop(); //menghapus array terakhir
// arr.pop(); //menghapus array terakhir

// 3. unshift & shift
// arr.unshift('Radit'); // membah array di paling awal
// arr.shift() // menghilangkan elemen array di awal
// console.log(arr.join(' - '));

// var arr = ["Feri", "Irawan", "Agile"];
// 4. splice 
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, .....)

// arr.splice(2, 0, 'Babe');
// arr.splice(1,2,'Babe','rangga');
// console.log(arr.join(' - '));

// 5. slice 
// slice(awal,akhir)
// var arr = ["Feri", "Irawan", "Agile", "Galang", "Hero"];
// var arr2 = arr.slice(1,4);
// console.log(arr.join(' - '));
// console.log(arr2.join(' - '));


// 6. forEach 
// var angka = [1,2,3,4,5,6,7,8];
// var nama = ["Feri", "Irawan", "Agile", "Galang", "Hero"];
// for(var i = 0; i < angka.length; i++){
//     console.log(angka[i]);
// }
// var cetak = function (e) {
//     console.log(e);
// }
// angka.forEach(function (e) {
//     console.log(e);
// });
// nama.forEach(function (e, i) {
//     console.log('Mahasiswa ke-' + (i+1) + ' adalah ' + e);
// })

// 7. map 
// var angka = [1,2,5,3,6,8,4];
// var angka2 = angka.map(function (e) {
//     return e * 2;
// });
// console.log(angka2.join(' - '));

// 8. sort 
// var angka = [1,2,5,3,6,8,4,7,10,20];
// // console.log(angka.join(' - '));
// angka.sort(function (a,b) {
//     return a-b;
// });
// console.log(angka.join(' - '));

// 9. filter  mencari banyak nilai
// var angka = [1,2,5,3,6,8,4,7,10,20];
// var angka2 = angka.filter(function (e) {
//     // return e == 5;
//     return e > 5;
// });
// console.log(angka2.join(' - '));



// 10. find satu nilai
// var angka = [1,2,10,5,3,6,8,4,7,20];
// var angka2 = angka.find(function (e) {
//     return e > 5;
// });
// console.log(angka2);






