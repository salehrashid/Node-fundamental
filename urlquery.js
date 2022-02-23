/**
 * URL Query String 
 * 
 * contoh :
 * URL dari sekedar https://www.google.com/
 * kemudian kita masukan keyword indonesia di kolom google
 * tetiba URLnya menjadi https://www.google.com/search?q=indonesia
 * 
 * adanya tanda tanya (?) digunakan untuk memisahkan antara url dengan querynya
 * Query digunakan untuk mengirim data ke server dengan menggunakan method GET
 * 
 * q = key
 * indonesia = value 
 *
 */

const http = require("http");
const url = require("url"); //import modul url
const querystring = require("querystring"); //import modul query string

const server = http.createServer((req, res) => {

    let urlRequest, //berisi path yang terdapat di request
        urlObj, //berisi url yang telah diproses
        urlQuery, //object dari query
        dataResponse //object dari query yang udah di parsing

    res.setHeader("Content-Type", "application/json")

    urlRequest = req.url;

    //convert urlRequest menjadi object
    urlObj = url.parse(urlRequest);
    console.log(urlObj)

    //ambil property yang terdapat di object url
    urlQuery = urlObj.query;

    if (!urlQuery) {
        dataResponse = {
            data: "query tidak di temukan"
        }
        return res.end(JSON.stringify(dataResponse))
    }
    dataResponse = querystring.parse(urlQuery)
    return res.end(JSON.stringify(dataResponse))
});
server.listen(5000)