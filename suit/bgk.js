const pBatu = document.querySelector('.batu');
const pGunting = document.querySelector('.gunting');
const pKertas = document.querySelector('.kertas');

function displayComputerChoice(comChoice) {
    const imgComputer = document.querySelector('#squareCom');
    imgComputer.setAttribute('src', 'img/' + comChoice + '.png');
}

pBatu.addEventListener('click', function () {
    const pCom = pilihanCom();
    const pPlayer = pBatu.className;
    const hasil = getHasil(pCom, pPlayer);

    console.log(pPlayer);
    console.log(pCom);
    console.log(hasil);

    displayComputerChoice(pCom);

    const info = document.querySelector('#output2');
    info.innerHTML = hasil;

    const getGambar = document.querySelector('.batu').getAttribute('src');

    const getUser = document.querySelector('#squareUser');
    getUser.innerHTML = `<img src=${getGambar} class='userBatu'>`;

    console.log(getGambar);
});

pGunting.addEventListener('click', function () {
    const pCom = pilihanCom();
    const pPlayer = pGunting.className;
    const hasil = getHasil(pCom, pPlayer);

    console.log(pPlayer);
    console.log(pCom);
    console.log(hasil);

    displayComputerChoice(pCom);

    const info = document.querySelector('#output2');
    info.innerHTML = hasil;

    const getGambar = document.querySelector('.gunting').getAttribute('src');

    const getUser = document.querySelector('#squareUser');
    getUser.innerHTML = `<img src=${getGambar} class='userGunting'>`;
});

pKertas.addEventListener('click', function () {
    const pCom = pilihanCom();
    const pPlayer = pKertas.className;
    const hasil = getHasil(pCom, pPlayer);

    console.log(pPlayer);
    console.log(pCom);
    console.log(hasil);

    displayComputerChoice(pCom);

    const info = document.querySelector('#output2');
    info.innerHTML = hasil;

    const getGambar = document.querySelector('.kertas').getAttribute('src');

    const getUser = document.querySelector('#squareUser');
    getUser.innerHTML = `<img src=${getGambar} class='userKertas'>`;
});
