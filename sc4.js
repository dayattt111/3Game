//Pengulangan dan Pengkondisian Komplex
var s = '';

for ( var i = 15; i > 0; i-- ){
    for( var x = 0; x < i; x++){
        s += '*';
    }
    s += '\n';
}
// console.log(s);

for ( var a = 0; a < 15; a++){
    for ( var b = 0; b < a; b++){
        s += '*';
    }
    s += '\n';
}
console.log(s);




//Tugas : Buat Sebuah Output Console.log

//1.

        //     *
        //    ***
        //   *****
        //  *******
        // *********

//2.

    //          *******
    //       *****  *****
    //      *****    *****
    //     *****      *****
    //    *****        *****
    //     *****      *****
    //      *****    *****
    //       *****  *****
    //          *******