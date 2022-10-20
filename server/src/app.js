const express = require('express');
var cors = require('cors');
const app = express();
const mysql = require('mysql2/promise');

let connection;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/database', async (req, res) => {
  const [rows, fields] = await connection.execute('SELECT * FROM user');
  res.send(rows);
});

app.get('/database/:id', async (req, res) => {
  const id = req.params.id;
  const [rows, fields] = await connection.execute(
    'SELECT * FROM user WHERE id=?',
    [id]
  );
  res.send(rows[0]);
});

app.post('/database', async (req, res) => {
  const { name, age } = req.body;
  const [rows, fields] = await connection.execute(
    `INSERT INTO user(name, age) VALUES(?, ?)`,
    [name, age]
  );
  res.send('추가 완료');
});

app.put('/database', async (req, res) => {
  const { id, name, age } = req.body;
  const [rows, fields] = await connection.execute(
    `UPDATE user SET name=?, age=? WHERE id=?`,
    [name, age, id]
  );
  res.send('수정 완료');
});

app.delete('/database', async (req, res) => {
  const { id } = req.body;
  const [rows, fields] = await connection.execute(
    `DELETE FROM user WHERE id=?`,
    [id]
  );
  res.send('삭제 완료');
});

app.listen(4000, async () => {
  // create the connection to database
  connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'myapp',
    password: 'root',
  });

  console.log('server start');
});
