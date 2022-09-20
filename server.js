const express = require("express")
const app = express()
const port = 3000

const server = app.listen(port, () => { // create a HTTP server on 

console.log(`Express running on port ${server.address().port}`)
});

app.use(express.static(__dirname, { // host the whole directory
    extensions: ["html", "css", "gif", "png", "jpg"],
}))

app.get("/", (req, res) => {
res.sendFile(__dirname + "/index.html")
})

app.get("*", (req, res) => {
return res.sendStatus(404)
})



  
