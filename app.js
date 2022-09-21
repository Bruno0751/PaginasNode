const express = require("express")
const app = express()


app.get("/", function(req, res){
    res.send("<h1 style='text-align: center;'>Pagina Seja Bem Vindo</h1>\
        <ul>\
            <li><a href='sobre'>Sobre</a></li>\
        </ul>\
        <fieldset>\
            <legend>Meu Formulário</legend>\
            <form style='text-align: center;' method='get' action='./ola/Bruno/Analista Java'>\
                <input  type='text' placeholder='Bruno' disabled>\
                <input type='text' placeholder='Analista Java'disabled>\
                <div><input type='submit' value='Enviar'></div>\
            </form>\
        </fieldset>\
    ")
})

app.get("/sobre", function(req, res){
    res.send("Pagina Sobre")
})
app.get("/ola/:nome/:cargo", function(req, res){
    res.send("<h1>Ola " + req.params.nome + "</h1>" + "<h2> Cargo " + req.params.cargo)
})
app.listen(8084, function(){
    console.log("Conectado...\n: http://127.0.0.1:8084 \n: http://localhost:8084")
})