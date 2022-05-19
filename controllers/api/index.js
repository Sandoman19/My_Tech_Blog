const router = require('express').Router();

const userRoutes = require('./userroutes.js');
const postRoutes = require('./postroutes.js');
const commentRoutes = require('./commentroutes.js');

router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);

module.exports = router;