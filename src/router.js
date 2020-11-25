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

    router.get('/in/:id', (req, res)=>{
        let {id} = req.params
        console.log(id)
        res.render('in')
    })
    router.post('/in', (req, res)=>{
        res.render('in')
    })

    return router

}
/*

exports.edit = (req, res)=>{

    let note_front = parseInt(req.body.note_front)
    let note_db = parseInt(req.body.note_db)

    pool.query('SELECT * FROM notes',(err, result)=>{
        res.render('edit', {
            notes: result,
            note_front,
            note_db
        })
    })

}

exports.change = async (req, res)=>{

    const {new_title, new_note, id} = req.body
    
    const the_note = {
        title: new_title,
        content: new_note,
    }
    
    const update = await pool.query(`UPDATE notes SET ? WHERE id = ?`, [the_note, id])

    res.redirect('/')

}

exports.delete = async (req, res)=>{
    let {id} = req.params
    
    const Delete = await pool.query(`DELETE FROM notes WHERE id = ${id}`)

    res.redirect('/')
}
*/