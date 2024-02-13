var express = require('express');
var router = express.Router();
var ctrlBlog = require('../controllers/blog');
var ctrlHome = require('../controllers/home');

// Set up routes to pages.
router.get('/', ctrlHome.home);
router.get('/bloglist', ctrlBlog.list);
router.get('/blogadd', ctrlBlog.add);

module.exports = router;
