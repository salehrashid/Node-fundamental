/**
 * Request body 
 * 
 * learn parsing data body dari request
 * 
 */

/*
 * bentuk transaksi cilent ada 2 yaitu upload dan download
 * 
 * Stream adalah seluruh kegiatan transaksi data dari awal sampai selesai, yakni:
 *      1. Mulai dari inisiasi data pada tujuan
 *      2. Pemisahan data yang akan dikirim menjadi bagian kecil (chunks)
 *      3. Pengiriman data chunks ke tujuan disebut dengan Buffering
 *      4. Setelah data selesai dibuffer semua, proses data agar menjadi utuh kembali
 */

const http = require("http")
const querystring = require("querystring")
const server = http.createServer((req, res) => {
    let urlReq, methodReq, dataRequest

    const chunksArr = [];
    const dataResponse = {};

    res.setHeader("Content-Type", "application/json")

    //untul mendapatkan path dari url 
    urlReq = req.url
    //kalau methodnya kosong, isi dengan get
    methodReq = req.method?? "get"

    //kita akan membuat routing ke login

    if (urlReq.toLowerCase() === "/login") {
        if (methodReq.toLowerCase() === "/post") {
            //tandai halaman login 
            dataResponse.data = "ini adalah halaman login"
        } else if (methodReq.toLowerCase() === "post") {
            req.on("data", (chunk) => {
                //tambahkan chunk ke chunkArr
                chunksArr.push
            })
        } else {
            dataResponse.data = "hanya menerima method GET dan POST"
        }
    } else {
        //kalau endpointnya bukan login
        dataResponse.data = "gunakan endpoint / login"
    }

    //setelah data request selesai, akan diterima oleh server:
    req.on("end", () => {
        //jika chunk ada datanya
        if(chunksArr.length !==0 ){
            dataRequest = Buffer.concat(chunksArr).toString();
            console.log(dataRequest)

            let requestObj = querystring.parse(dataRequest)

            //masukan object tersebut ke responya
            dataResponse.data = requestObj
        }
    })
    return res.end(JSON.stringify(dataResponse))
})
server.listen(3000)