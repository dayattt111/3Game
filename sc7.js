//array manual
var kontak = [];
var tambahKontak = function(namaKontak, kontak){
    if( kontak.length == 0){
        kontak.push(namaKontak);
    return kontak;
    } else{
        for( var i = 0; i < kontak.length; i++ ){
            if( kontak[i] == undefined ){
                kontak[i] = namaKontak;
                return kontak;
            }else if(kontak[i] == namaKontak) {
                alert(namaKontak + ' Maaf Nama Kontak yang anda input sudah ada');
                return kontak;
            }else if( i == kontak.length - 1) {
                kontak.push(namaKontak);
                return kontak;
            }
        } 
    }
}

var hapusKontak = function(namaKontak, kontak){
    if( kontak.length == 0){
        alert('Kontak ini Masih Kosong ! Silahkan Untuk mengisinya.');
        return kontak;
    } else {
        for( var i = 0; i < kontak.length; i++ ){
            if( kontak[i] == namaKontak ){
                kontak[i] = undefined;
                return kontak;
            }
            else if( i == kontak.length - 1) {
                alert(namaKontak + ' Nama Kontak itu Tidak Ada Di Array');
                return kontak;
            }
        }
    }
}