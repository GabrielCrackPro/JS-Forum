const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const monk = require("monk")

const port = process.env.PORT || 3000
const router = express.Router()

const app = express()

app.use(morgan("common"))
app.use(cors())
app.use(express.json())
app.use(router)

app.get('/', (req,res)=>{
    res.json({
        message: "This is a JS vanilla forum 💬💬"
    })
})
app.post('/', (req,res)=>{
    console.info('---New User Data---')
    console.log(req.body)
})

router.route('/login', (req,res)=>{
    res.send('ok')
})

app.listen(port, ()=>{
    console.log('Listening on port' + ' ' + port)
})