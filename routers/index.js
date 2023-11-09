const express = require('express'),
    router = express.Router(),
    userRouter = require('./user.router'),
    categoryRouter = require('./category.router'),
    articleRouter = require('./article.router')

router.use('/user', userRouter)
router.use('/category', categoryRouter)
router.use('/article', articleRouter)

module.exports = router