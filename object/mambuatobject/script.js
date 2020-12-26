// membuat object 
//  object literal 
// var mhs1 = {
//     nama : "Feri Irawan",
//     uim : "902887101",
//     email  : "feriirawan@gmail.com",
//     jurusan : "Teknik Informarika"
// };
// var mhs2 = {
//     nama : "azis Irawan",
//     uim : "902887101",
//     email  : "azisirawan@gmail.com",
//     jurusan : "Teknik Sipil"
// };


// function declaration 
// function buatObjectMahasiswa(nama, nim, email, jurusan) {
//     var mhs = {};
//     mhs.nama = nama;
//     mhs.nim = nim;
//     mhs.email = email;
//     mhs.jurusan = jurusan;
//     return mhs;
// } 
// var mhs3 = buatObjectMahasiswa('Feri', '018982981982', 'feri@gamil.com', 'Bidan')
// var mhs4 = buatObjectMahasiswa('Feri', '018982981982', 'feri@gamil.com', 'Perawat')




// constructor 
function Mahasiswa(nama, nim, email, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa('Arra', '018982981982', 'feri@gamil.com', 'Bidan');





