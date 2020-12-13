const express = require('express')
const router = express.Router()

const pool = require('./dbConection')

module.exports = () =>{

    router.get('/', (req, res)=> {
        
        pool.query('SELECT * FROM tasks',(err, result)=>{

           res.render('soor', {task: result})

        })

    })
    router.post('/saveTask', (req, res)=>{

        const {title, description} = req.body

        pool.query(`INSERT INTO tasks SET?`,{
            title,
            description,
        },(err, result)=>{
            res.redirect('/')
        })

    })
    router.post('/in', (req, res)=>{
        let {title, description, id} = req.body
        res.render('in', {title: title, description: description, id: id})
    })
    router.post('/edit', async (req, res)=>{

        const {title, description, id} = req.body
        
        const the_note = {
            title: title,
            description: description
        }
        
        const update = await pool.query(`UPDATE tasks SET ? WHERE id = ?`, [the_note, id])
    
        res.redirect('/')
    
    })
    router.get('/delete/:id', async (req, res)=>{
        const {id} = req.params
        
        const Delete = await pool.query(`DELETE FROM tasks WHERE id = ${id}`)

        res.redirect('/')
    })

    return router

}