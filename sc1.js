// Bilangan GEnap dan Ganjil
var game = 10;
var time = 60;

var angka = prompt('Masukkan Angka');

if (angka % 2 == 0){
    alert(angka + ' Adalah Bilangan Genap');
} else if( angka % 2 === 1){
    alert(angka + ' Adalah Bilangan Ganjil');
} else {
    alert(angka + ' <=== Bukanlah Angka');
}