import { createConnection } from "mysql";

let connection = createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'bd_nutricion',
    charset:'utf8'
})

export default connection;