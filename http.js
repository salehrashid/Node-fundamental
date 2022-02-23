/**
 * module : HTTP
 * 
 * cara membuat server sederhana dengan module http
 */

//import module http
const http = require("http");

const server = http.createServer((req, res) => {
    
    //inisialisasi variable yang digunakan
    
    let data
    //panggil request
    console.log(req)

    /**
     * menampilkan sebuah objek dari data
     * object request yang sering di pakai itu ada url, method, headers
     */

    data = {
        url: req.url,
        method: req.method,
        header: req.headers,

    }

    //set header menjadi json
        

    // console.log(data)

    res.end(JSON.stringify(data))

});

server.listen(3000)
