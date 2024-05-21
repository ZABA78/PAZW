var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_kurs'
});

  //                INSERT INTO users VALUES (NULL, "Kamil", "Ślimak")               \\
 //                               DELETE FROM users                                   \\
//                                DROP TABLE users                                     \\


connection.query('DROP TABLE users ',function(err,rows){
    if(err){
        console.log(err);
    } else {
        console.log(rows);
    }
});

connection.end();
