const errorHanding =  (err, req, res, next) =>{
    return res.status(500).json({
        error: err.message
    })
}

module.exports= errorHanding