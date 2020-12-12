const express= require('express')
const path = require('path')
const env = require('node-env-file')
const {format} = require('timeago.js')

const app = express()

app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')))

env('./.env')

app.use((req,res,next)=>{
    app.locals.time = format
    next()
})

app.use(express.urlencoded({

    extended: true

}))

const routes = require('./router')

app.use('/', routes())

app.use((req, res, next) => {

    res.status(200)

    res.render('404', { url: req.url })
    return

})

app.use((req, res, next) => {

    res.status(404)

    res.render('404', { url: req.url })
    return

})

const port = process.env.PORT || 8000

app.listen(port)