let express = require('express');
let app = express();
let fs = require('fs');
let bodyParser = require('body-parser');

app.use(bodyParser.json()); // 解析请求体json内容

// 异步读取方法
let readBooks = callback => {
    fs.readFile('./books.json', 'utf8', (err, data) => {
         if(err || data.length === 0) data = '[]';
         callback(JSON.parse(data));
    });
};

// 异步写入方法
let writeBooks = (data, callback) => {
    fs.writeFile('./books.json', JSON.stringify(data), callback);
};

// 监听get请求并处理
app.get('/books', (req, res) => {
    console.log(req.query.id); // 得到前端传递过来id
    let id = Number(req.query.id);
    if(id) { // 返回指定id 的图书数据
        readBooks(books => {
            // let book = books.find(item => {
            //     return item.id === id;
            // });
           
            let book = books.find(item => item.id === id);
       
            res.send(book);
        });
    } else { // 返回所有数据
        readBooks(function (books) { // function => callback  books => JSON.parse(data)
            // console.log(books);
            res.send(books);
        });
    }
   

});

// 监听put请求并处理
app.put('/books', (req, res) => {   
    // console.log(req.body);    // req.body 获取到请求体里的内容  json对象
    readBooks(books => {
       let id = Number(req.body.id);
       books = books.map(item =>{
           if(item.id === id) {
               return req.body; // 替换为修改内容
           }
           return item;
       });
       writeBooks(books, err =>{
           res.send(req.body);
       })
    });

});

// 监听delete请求并处理
app.delete('/books', (req, res) => {
   let id = Number(req.query.id);
   readBooks(books => {
      books = books.filter(item => item.id !== id); 
      console.log(books);
      writeBooks(books, err => {
          res.send({});
      });
   });
});

// 监听post请求并处理
app.post('/books', (req, res) => {
    let book = req.body;
   readBooks(books => {
        book.id = books[books.length - 1].id + 1;
        books.push(book);
        writeBooks(books, err => {
            res.send(book);
        });
   });
});

app.listen(7000, () => {
   console.log('监听7000端口！');
});