const http = require('http');
let count1 = 0;
let count2 = 0;
let count3 = 0;
const server = http.createServer((req, res) => {
  console.log('Запрос получен');
  if (req.url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=UTF-8',
    });
    res.end(`
    <h1>Главная</h1>
    <a href="/about">На следущую</a>
    <p>Количество переходов на данную страницу- ${++count1}</p>
    <p>Общее количество переходов- ${++count3}</p>
    `);
  } else if (req.url === '/about') {
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=UTF-8',
    });
    res.end(`
    <h1>Вторая</h1>
    <a href="/">На главную</a>
    <p>Количество переходов на данную страницу- ${++count2}</p>
    <p>Общее количество переходов - ${++count3}</p>
    `);
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/html; charset=UTF-8',
    });
    res.end(`
    <h1>Страница не найдена</h1>
    <p>Общее количество переходов - ${++count3}</p>
    `);
  }
});
const port = 3000;
server.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
