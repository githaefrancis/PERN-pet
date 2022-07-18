require("dotenv").config()

const Pool=require("pg").Pool;
console.log(process.env.password)
const pool=new Pool({
    user:process.env.user,
    password:process.env.password,
    host:process.env.host,
    port:process.env.port,
    database:process.env.database
});

module.exports=pool;