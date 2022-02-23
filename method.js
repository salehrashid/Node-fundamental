const http = require("http");

const server = http.createServer((req, res) => {
    let url, method, dataResponse

    res.setHeader("Content-Type", "appliction/json")
    url = req.url;
    method = req.method ?? "get"

    if (url === "/") {
        dataResponse = {
            data: "ini adalah halaman home"
        }
    } else if (url.toLowerCase() == "/login") {
        if (method.toLowerCase() === "post") {

            dataResponse = {
                data: "anda login dengan method post"
            }
        } else {
            dataResponse = {
                data: "oke"
            }
        }
    } else {
        dataResponse = {
            data: "404 not found"
        }
    }
    return res.end(JSON.stringify(dataResponse))
})
server.listen(5000)