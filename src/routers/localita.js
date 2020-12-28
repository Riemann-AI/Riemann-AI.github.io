const express = require('express')
const router = new express.Router()
const localita = require('../models/localita')
const localita2 = require('../models/localita-2')

/**CREATE */
router.post('/api-data/post', async (req, res) => {
    const user = new localita(req.body)
    try{
        await user.save()
        res.status(201).send(user) // questa riga invia a postman la reply
    } catch(e){
        res.status(400).send(e) // invia l'errore con codice 400
    }
})

/**CREATE */
router.post('/api-data/post-new', async (req, res) => {
    const user = new localita2(req.body)
    try{
        await user.save()
        res.status(201).send(user) // questa riga invia a postman la reply
    } catch(e){
        res.status(400).send(e) // invia l'errore con codice 400
    }
})

/**READ the latest data */
router.get('/api-data/read', async (req,res) => {
    try{
        const users = await localita.find({})
        res.send(users)
    } catch(e){
        res.status(500).send(e)
    }
})

/**Set http endpoint to delete users and/or tasks */
router.delete('/api-data/:id', async (req,res)=>{
    try {
        const user = await localita.findByIdAndDelete(req.params.id)
        if(!user){
            return res.status(404).send()
        }
        res.send(user)

    } catch(e){
        res.status(500).send()
    }
})

/**READ cumulative data (sum of)*/
router.get('/api-data/cumulative', (req,res) => {
    localita2.aggregate([
        {$unwind: "$message"},
        {$group:
            {
                _id:{position: "$message.positionName"},
                cumulativeCount:{$sum:"$message.count"}
            }
        },
        // Sorting pipeline
        {$sort: { "cumulativeCount": -1 }}
    ]).then((users) =>{
        res.send(users)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

module.exports = router