//BUS Program

//menambahkan onject
function Bus(supir, rute, penumpang, kas){


    this.supir = supir;
    this.rute = rute;
    this.penumpang = penumpang;
    this.kas = kas;

    //Bus 1
    this.penumpangNaik = function (namaPenumpang){
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function (namaPenumpang, bayar){
        if (this.penumpang.length === 0 ){
            alert('Angkot Masih Kosong');
            return false;
        }
    }
    for ( var i = 0; i < this.penumpang.length; i++){
        if( this.penumpang[i] == namaPenumpang){
            this.penumpang[i] = undefined;
            this.kas += bayar;
            return this.penumpang;
        }
    }

    //Bus 2
    
}

//isi object
var bus1 = new Bus('Mas Dayat',['perintis','veteran'], [], 0);
// var bus2 = new  Bus('Jecky Chan', ['Daya', 'Sudiang'], [], 0);

