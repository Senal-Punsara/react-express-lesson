import dbConnection from "../dbCon.js";

const User = {
    async createUser(userData) {
        const sql = 'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)';
        const vals = [userData.name, userData.email, userData.hashedPassword, userData.role];
        
        return new Promise((resolve, reject) => {
            dbConnection.query(sql, vals, (err, data) => {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    resolve(vals);
                }
            });
        });
    },

    async findUserByUsername(email) {
       const sql = 'SELECT * FROM users WHERE email = ?';
       const vals = [email];
       return new Promise((resolve, reject) => {
        dbConnection.query(sql, vals, (err, data) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(data[0]);
            }
        });
    });
       
    }
};

export default User;
