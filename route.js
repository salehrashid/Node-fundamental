//basic routing

const http = require("http")

const server = http.createServer((req, res) => {
    let url, dataResponse

    res.setHeader("Content-Type", "application/json")

    url = req.url

    /**
     * membuat routing yang dibutuhkan sesuai client 
     * homepage, login 404 not found
     */

    if (url === "/"){
        dataResponse = {
            data: "ini halaman homepage"
        }
    }else if(url.toLowerCase() === ""){
        dataResponse = {
            data: "ini halaman register"
        }
    }else if(url.toLowerCase() === ""){
        dataResponse = {
            data: "ini halaman login"
        }
    }else{
        dataResponse = {
            data: "404, maaf halaman yang anda cari tidak ditemukan"
        }
    }
    return res.end(JSON.stringify(dataResponse))
});
server.listen(3000)