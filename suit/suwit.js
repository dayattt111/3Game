function pilihanCom(){
    const com = Math.random();
// pilihan dari komputer
    if ( com < 0.34) return 'batu';
    if( com >= 0.34 && com < 0.67 ) return 'gunting';
    return 'kertas';
}

// Rules
function getHasil(pCom, pPlayer){
    if ( pPlayer == pCom ) return 'SERI !';
    if ( pPlayer == 'batu' ) return ( pCom == 'gunting' ) ? 'Menang !' : 'Kalah !';
    if ( pPlayer == 'gunting') return ( pCom == 'batu' ) ? 'Kalah !' : 'Menang !';
    if ( pPlayer == 'kertas') return ( pCom == 'gunting' ) ? 'Kalah !' : 'Menang !';
}

const pBatu = document.querySelector('.batu');
const pGunting = document.querySelector('.gunting');
const pKertas = document.querySelector('.kertas');


pBatu.addEventListener('click', function() {
    const pCom = pilihanCom();
    const pPlayer = pBatu.className;
    const hasil = getHasil(pCom, pPlayer);

    const imgComputer = document.querySelector('#squareCom');
    imgComputer.innerHTML = `<img src="${pCom}.png">`

    const info = document.querySelector('#output2');
    info.innerHTML = hasil;

    const getGambar = document.querySelector('.batu').getAttribute("src");

    const getUser = document.querySelector('#squareUser');
    getUser.innerHTML = `<img src=${getGambar} class='userBatu'>`


});
pGunting.addEventListener('click', function() {
    const pCom = pilihanCom();
    const pPlayer = pGunting.className;
    const hasil = getHasil(pCom, pPlayer);

    console.log(pPlayer);
    console.log(pCom);
    console.log(hasil);

    const imgComputer = document.querySelector('#squareCom');
    imgComputer.innerHTML = `<img src="${pCom}.png">`

    const info = document.querySelector('#output2');
    info.innerHTML = hasil;

    const getGambar = document.querySelector('.gunting').getAttribute("src");

    const getUser = document.querySelector('#squareUser');
    getUser.innerHTML = `<img src=${getGambar} class='userGunting'>`
});

pKertas.addEventListener('click', function() {
    const pCom = pilihanCom();
    const pPlayer = pKertas.className;
    const hasil = getHasil(pCom, pPlayer);

    console.log(pPlayer);
    console.log(pCom);
    console.log(hasil);

    const imgComputer = document.querySelector('#squareCom');
    imgComputer.innerHTML = `<img src="${pCom}.png">`

    const info = document.querySelector('#output2');
    info.innerHTML = hasil;
    
    const getGambar = document.querySelector('.kertas').getAttribute("src");

    const getUser = document.querySelector('#squareUser');
    getUser.innerHTML = `<img src=${getGambar} class='userKertas'>`
});