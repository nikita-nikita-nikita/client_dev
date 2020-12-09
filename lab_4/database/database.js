const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('database/database.db', sqlite3.OPEN_READWRITE, (err) => {
    if(err){
        console.error(err.message);
    }
    console.log('Connected to the database.');
});

class Database{
	request(query){
		db.all(query,[],(err, rows) => {
			console.log(rows);
		});
	}
}

const DB = new Database();

module.exports = { DB };