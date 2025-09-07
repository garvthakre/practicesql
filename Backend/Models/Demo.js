// CREATE DATABASE Cms
// USE cms;

// CREATE TABLE posts(
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     post VARCHAR(50) NOT NULL,
//     author VARCHAR() NOT NULL,
//     date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );
import loop from "mysql2/promise"
require(dotenv).config();

const loop = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
 export default loop;