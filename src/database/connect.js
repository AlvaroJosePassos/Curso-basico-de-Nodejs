const mongoose = require("mongoose")

const connectToDatabase = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@nodejsfull.pkv8t.mongodb.net/database?retryWrites=true&w=majority&appName=NodejsFull`)
        console.log(`Conexão com o banco de dados realizada com sucesso`)
    } catch (error) {
        console.log(`Não foi possivel conectar ao banco de dados pelo erro, ${error}`)
    }
}

module.exports = connectToDatabase