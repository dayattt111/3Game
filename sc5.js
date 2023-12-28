//Game Suit - Dayat//

var ulang = true;
while( ulang ){

    //MENANGKAP PILIHAN PLAYER
    var p = prompt('Masukkan Pilihan Kamu : (batu, gunting, kertas) ');

    //MENANGKAP PILIHAN KOMPUTER


    //MEMBANGKITKAN BILANGAN RANDOM
    var com = Math.random();

    if ( com < 0.34){
        com = 'batu';
    } else if( com >= 0.34 && com < 0.67 ){
        com = 'gunting';
    }
    else {
        com = 'kertas';
    }
    console.log(com);

    //MENENTUKAN RULES
    var hasil = '';

    if ( p == com ){
        hasil = 'SERI !';
    }
    else if ( p == 'batu' ){
        // if ( com == 'gunting' ){
        //     hasil = 'Menang !';
        // }
        // else {
        //     hasil = 'Kalah !';
        // }
        hasil = ( com == 'gunting' ) ? 'Menang !' : 'Kalah !';
    }
    else if ( p == 'gunting'){
        hasil = ( com == 'batu' ) ? 'Kalah !' : 'Menang !';
    }
    else if ( p == 'kertas'){
        hasil = ( com == 'gunting' ) ? 'Kalah !' : 'Menang !';
    }
    else{
        hasil = 'Memasukkan Pilihan yang Salah !';
    }

    //TAMPILKAN HASIL PERMAINAN SUIT
    alert('Kamu Memilih : ' + p + ' dan Komputer Memilih : ' + com + '\n\nMaka Hasilnya Adalah = Kamu ' + hasil )

    ulang = confirm('Lagi ? (Ok/Cancel)');
}
alert('Terimakasih Sudah Bermain !');