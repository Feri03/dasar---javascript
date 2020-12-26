// this = window
// var a = 10;
// console.log(window.a);






// membuat object 

// cara 1 - function declaration 
// function halo(){
//     console.log(this);
//     console.log('halo');
// }
// this.halo();
// this mengembalikan object global 














// cara 2 - function literal
// var obj = {a : 10, nama : "feri"};
// obj.halo = function () {
//     console.log(this);
//     console.log('halo');
// };
// obj.halo();
// this mengembalikan objet yang bersangkutan 




















// cara 3 - constructor 
// function Halo() {
//     console.log(this);
//     console.log('halo');
// }
// var obj1 = new Halo();
// var obj1 = new Halo();
// this mengembalikan object yang baru di buat 