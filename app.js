const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 8080



app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/api', (req,res)=>{
    res.json({
        "IP address" : req.headers['x-forwarded-for'],
        "Language" : req.headers['accept-language'],
        "Browser": req.headers['user-agent']
    })
        
})



app.listen(port, ()=>{
    console.log('Server listening on port: ' + port)
})
