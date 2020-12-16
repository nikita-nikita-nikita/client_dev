const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('database/database.db', sqlite3.OPEN_READWRITE, (err) => {
    if(err){
        console.error(err.message);
    }
    console.log('Connected to the database.');
});

class Database{
	request(query){
		return new Promise((resolve, reject) => {
			db.all(query, [], (err, rows) => {
				if(err){
					reject();
				}

				resolve(rows);
			});
		});
	}

	getRows(query){
		return new Promise((resolve, reject) => {
			db.all(query, [], (err, rows) => {
				if(err){
					reject(err);
				}

				resolve(rows);
			});
		});
	}

	getRow(query){
		return new Promise((resolve, reject) => {
			db.all(query, [], (err, rows) => {
				if(err){
					reject(err);
				}

				if(rows.length)
					resolve(rows[0]);
				else
					resolve(null);
			})
		});
	}

	insertAndReturn(table, query){
		return new Promise((resolve, reject) => {
			db.run(query, [], (err) => {
				if(err){
					reject(err);
				}

				this.getRow(`SELECT * FROM ${table} WHERE id=(SELECT MAX(id) FROM ${table})`).then(resolve);
			});
		});
	}

	createUser(username, password, mail){
		return this.insertAndReturn('users', `INSERT INTO users(username, password, mail) VALUES ('${username}','${password}','${mail}')`);
	}

	getUserById(id){
		return this.getRow(`SELECT * FROM users WHERE id=${id}`);
	}

	getUserByMail(mail){
		return this.getRow(`SELECT * FROM users WHERE mail='${mail}'`);
	}

	getUserByUsername(username){
		return this.getRow(`SELECT * FROM users WHERE username='${username}'`);
	}

	getAllUsers(){
		return this.getRows(`SELECT * FROM users`);
	}

	getPurchasesByUserId(id){
		return this.getRows(`SELECT * FROM purchases WHERE user_id=${id}`);
	}

	addPurchase(user_id, track_id, type){
		return this.insertAndReturn('purchases', `INSERT INTO purchases(user_id, track_id, type) VALUES(${user_id}, ${track_id}, ${type})`)
	}

	addToBasket(user_id, track_id, type){
		return this.insertAndReturn('basket', `INSERT INTO basket(user_id, track_id, type) VALUES(${user_id}, ${track_id}, ${type})`)
	}

	getTracksInBasketByUserId(id){
		return this.getRows(`SELECT * FROM basket WHERE user_id=${id}`);
	}

	removeFromBasketByItemId(id){
		return new Promise((resolve, reject) => {
			db.run(`DELETE FROM basket WHERE id=${id}`, [], (err) => {
				if(err)
					reject(err);

				resolve();
			});
		});
	}

	getTrackById(id){
		return this.getRow(`SELECT * FROM tracks WHERE id=${id}`);
	}

	getAllTracks(){
		return this.getRows(`SELECT * FROM tracks`);
	}

	getTrackTags(id){
		return this.request(`SELECT tn.name FROM tags t JOIN tag_names tn ON t.tag_id = tn.id WHERE track_id=${id}`);
	}

	getAllPrices(){
		return this.getRows(`SELECT * FROM prices`);
	}
}

const DB = new Database();

module.exports = { DB };