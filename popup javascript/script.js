// fungsi popup
// alert
// prompt = mengembalikan nilai
// confirm

// alert('feri');
// alert('kelas');
// alert('jurusan');

// var nama = prompt('Masukan nama anda :');
// alert(nama);

// var tes = confirm('kamu yakin??');
// if (tes === true){
//     alert('user menekan OKE!');
// }else{
//     alert('user menekan CANCEL!');
// }


alert('selamat datang..')
var lagi = true;

while (lagi === true) {
    var nama = prompt('masukan nama anda : ');
    alert('halo '+ nama);

    lagi = confirm('coba lagi??');
}
alert('terima kasih...');