const express = require('express');
const router = express.Router();

const moviesRouter = require('./moviesRoute');
const useRouter = require('./userRoute');

router.use('/', moviesRouter);
router.use('/', useRouter);

module.exports = router;