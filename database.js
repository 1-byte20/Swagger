import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./database.sqlite");

const initializeDB = async () => {
    // await dbRun("DROP TABLE IF EXISTS users");
    await dbRun("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, firstName TEXT, lastName TEXT, email TEXT)");

    // const users = [
    //     {
    //         id: "01",
    //         firstName: "Doe",
    //         lastName: "John",
    //         email: "john.doe@example.com" 
    //     },
    //     { 
    //         id: "02",
    //         firstName: "Doe",
    //         lastName: "John",
    //         email: "john.doe@example.com" 
    //     },
    //     { 
    //         id: "03",
    //         firstName: "Doe",
    //         lastName: "John",
    //         email: "john.doe@example.com" 
    //     },
    //     {
    //         id: "04",
    //         firstName: "Gabriella",
    //         lastName: "Kalocsai",
    //         email: "kaloGarbri@cirtomail.hu"
    //     },
    //     {
    //         id: "05",
    //         firstName: "Gabi",
    //         lastName: "Tóth",
    //         email: "kaloGarbri@cirtomail.hu"
    //     }
    // ];

    // for (const user of users) {
    //     await dbRun("INSERT INTO users (firstName, lastName, email) VALUES (?, ?, ?)", [user.firstName, user.lastName, user.email]);
    // }
};

function dbQuery(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.all(sql, params, (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
}

function dbRun(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.run(sql, params, function (err) {
            if (err) reject(err);
            else resolve(this);
        });
    });
}

export { db, dbQuery, dbRun, initializeDB };
