const app = require("./app");
// const {resolve} = require('path')
const dotenv = require("dotenv");

const connectDatabase = require("./config/database");

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: Uncaught Exception`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
  });


//config

dotenv.config({path:"backend/config/config.env"});

//connecting to databse
connectDatabase()

const server = app.listen(process.env.PORT,()=>{

    console.log(`server is working on http://localhost: ${process.env.PORT}`)
})


// unhandled promise rejection
process.on("unhandledRejection",err=>{
    console.log("Error: Invalid connection string");
    console.log("Shutting down the server due to Unhandled Promise Rejection");

    server.close(()=>{
        process.exit(1);
    });
})