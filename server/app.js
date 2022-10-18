const express = require('express');
var cors = require('cors');
const app = express();

const test = [
  {
    id: 1,
    text: 'test 1',
  },
];

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/test', (req, res) => {
  res.json(test);
});

app.post('/test', (req, res) => {
  const text = req.body.text;
  test.push({
    id: test.length + 1,
    text,
  });
  return res.send('추가 완료');
});

app.put('/test', (req, res) => {
  const { id, text } = req.body;
  test[id - 1].text = text;
  return res.send('수정 완료');
});

app.delete('/test', (req, res) => {
  const { id } = req.body;
  test.splice(id - 1, 1);
  return res.send('삭제 완료');
});

app.listen(4000, () => {
  console.log('server start');
});
