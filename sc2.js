// perulangan bercabang
var game = 20;
var gameJln = 10;

for( var noGame = 1; noGame <= game; noGame++){
    if ( noGame <= gameJln ){
        console.log('Game ke-' + noGame + 'Berjalan Dengan Baik');
    } else if(noGame <= 12){
        console.log('Game ke-' + noGame + 'Sedang Overhead');
    } else{
        console.log('Game ke-'+ noGame + 'Sedang Kosong');
    }
}