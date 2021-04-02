var app = require("./config/server")

var rotaHome = require("./app/routes/home")
rotaHome(app)

var rotaFormInclusaoLivro = require("./app/routes/formulario_inclusao_livro")(app)

var rotaLivros = require("./app/routes/livros")(app)

app.listen(3000, function(){
    console.log("Servidor rodando com Express com Nodemon na porta 3000")
})