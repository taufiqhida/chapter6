const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    cors = require('cors'),
    router = require('./routers'),
    errorHandling = require('./middlewares/errorHanding')

require('dotenv').config()

app.use(express.json({ strict : false}))
app.use(cors())
app.use('/images', express.static('public/images'))

//Ini error Utama
app.use('/api/v1', router);
//Ini error handling
app.use(errorHandling);

app.get('*', (req, res)=>{
    return res.status(404).json({
        error: 'End Point is Not Register NoT Found 404'
    })
})

app.listen(port, ()=>{
    console.log(`Server is Running at PORT ${port}`)
})