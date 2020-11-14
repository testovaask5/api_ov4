const express = require('express')
const app = express()
const fs = require('fs')

app.use(express.static('public'))
app.use(express.json())


/************** Задание начало **************/
// Запрос отправляем через файл test.http

const validator = (req, res, next) => {
    if (success) next()
}
const verifyToken = (req, res, next) => {
    req.get('Authorization') == 'bearer ' + 'dsksdvjsdhvjshvksvnjsdvh'
    if (token) next()
}

const checkRole = (req, res, next) => {
    if (req.body.role == 'admin') next()
}

const createPost = async (req, res, next) => {
    // await Post.create(req.body)
    fs.writeFile('message.txt', req, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
}

app.post('/api/message', validator, verifyToken, checkRole, createPost)

/************** Задание конец **************/
 
app.get('/api/message', /*middleware*/ function (req, res, next) {
    req.get()
    setTimeout(() => {
        console.log('Step 1');        
        next()
    }, 1000)
}, function (req, res, next) {
    setTimeout(() => {
        console.log('Step 2');        
        next()
    }, 1000)
}, function (req, res, next) {
    // res.send({message: 'Hello World'})
    setTimeout(() => {
        console.log('Step 3');        
        next()
    }, 1000)
})

app.get('/api/message', /*middleware*/ function (req, res, next) {
    setTimeout(() => {
        console.log('Step 4');        
        next()
    }, 1000)
}, function (req, res, next) {
    setTimeout(() => {
        console.log('Step 5');        
        next()
    }, 1000)
}, function (req, res, next) {
    res.send({message: 'Hello World'})
    setTimeout(() => {
        console.log('Step 6');        
        next()
    }, 1000)
})

app.post('/api/message', function (req, res) {
    console.log('POST /api/message')
    res.send(req.body)    
})
 
app.listen(3000)