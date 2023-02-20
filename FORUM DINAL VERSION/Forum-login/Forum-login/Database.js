const { Pool } = require('pg');
const pool = new Pool({
  host: "localhost",
  port: 4200,
  user: "postgres",
  password: "macaj@$^",
  database: "forum-practise"
});


//vytvori konekciu do databazy
pool.connect((err) => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('connected');
  }
});
