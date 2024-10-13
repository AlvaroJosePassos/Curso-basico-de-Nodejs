const path = require('path');

//Basename / arquivo atual
console.log(path.basename(__filename));

//Dirname / diretorio atual
console.log(path.dirname(__filename));

//Extname / extensão do arquivo
console.log(path.extname(__filename))

//Parse / criar um objeto path
console.log(path.parse(__filename))


//Join / juntar caminhos de arquivos
console.log(path.join(__dirname, "test", "teste.html"))