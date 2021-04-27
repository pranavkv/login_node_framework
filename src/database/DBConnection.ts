import mysql from "mysql";

export class DBConnection {

    public static async init() {

        const connection = mysql.createConnection({
            host: "localhost",
            user: "user",
            password: "password",
            database: "sitepoint"
        });

        connection.connect((err) => {
            if (err) {
                console.log("Error connecting to Db");
                return;
            }
            console.log("Connection established");
        });
    }

}
