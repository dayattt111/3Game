const token = ~~[Math.random() * 12345678]

const pictures = ["1.png", "2.png", "3.png"]

function login (username){
    console.log('Sedang Memproses data User...')
    return new Promise((success, failed) => {
        setTimeout(() => {
            if(username != "Dayat") failed("Maaf Anda Belum Terdaftar...")
            success(token)
        }, 200)

    })
}

function getUser(token){
    console.log('Sedang Memproses ApiKey...')
    return new Promise((success, failed) => {
        if (!token) failed('Maaf Tidak ada Token...')
        setTimeout(() => {
            success({ apiKey: xkey404 })
        }, 500)
    })
}

function getPictures(apiKey){
    console.log('Sedang Memproses Gambar...')
    return new Promise ((success, failed) => {
        if(!apiKey) failed('Tidak Memiliki ApiKey Tidak Bisa Mengakses...')
        setTimeout(() => {
            success({ pic: pictures })
        }, 1500)
        
    })
}

async function userDisplay(){
    try {
        const { token } = await login("Dayat")
        const { apiKey } = await getUser (token)
        const { pic } = await getPictures (apiKey)

        console.log('
        Token Anda adalah: ${token}
        ApiKey anda adalah: ${apiKey}
        Hasil Req Gambar anda Sebagai Berikut ini: ${pic}
        ')
        
    } catch (arr) {
        console.log(arr)
    }
}

userDisplay()