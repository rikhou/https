const express = require('express');
// const sqlite3 = require('sqlite3').verbose();
// const redis = require('redis');
const http2 = require('http2');
const fs = require('fs');
const http2Express = require('http2-express-bridge');

//const app = express();
const app = http2Express(express);

// const dbFilePath = "D://sqlite//demo.db";
// var db = new sqlite3.Database(dbFilePath, sqlite3.OPEN_READWRITE,(err) => {
//     if(err){
//         console.error(err.message);
//     }
// });

// const REDIS_PORT = process.env.PORT || 6379;
// const client = redis.createClient(REDIS_PORT);

// client.on('connect', ()=> {
//     console.log('Connect to Redis!');
// });
// client.connect();

app.get("/", async (req, res) => {
    // if(client.exists('user')!=true){
    //     db.all('select * from demo', function (err, data){
    //         if(err){
    //             console.error(err.message);
    //         }else{
    //             res.status(200).json(data);
    //             client.setEx('user', 3600, JSON.stringify(data));
    //         }
    //     });
    // }else{
    //     res.send(await client.get('user'));
    // }

    // res.send('Hello World!');
});

const option = {
    key: fs.readFileSync("./server.key"),
    cert: fs.readFileSync("./server.crt"),
    allowHTTP1: true
}



const server = http2.createSecureServer(option, app);

server.listen(3000);