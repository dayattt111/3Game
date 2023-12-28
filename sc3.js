// Pemilihan
var cell = prompt('Masukkan Data');

switch (cell){
    case 'ur1' :
        alert('ini baris 1');
        break;
    case 'ur2' :
        alert('ini baris 2');
        break;
    case 'ur3' :
        alert('ini baris 3');
        break;
    case 'uc1' :
        alert('ini colum 1');
        break;
    case 'uc2' :
        alert('ini colum 2');
        break;
    case 'uc3' :
        alert('ini colum 3');
        break;
    default :
        alert('Salah Inputan')
}

//Bisa Juga Seperti ini untuk mempersingkat coding

// switch (cell){
//     case 'ur1' :
//     case 'ur2' :
//     case 'ur3' :
//         alert('ini baris');
//         break;
//     case 'uc1' :
//     case 'uc2' :
//     case 'uc3' :
//         alert('ini colum');
//         break;
//     default :
//         alert('Salah Inputan')
// }