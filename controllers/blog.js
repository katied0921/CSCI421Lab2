// Get blog list page.
module.exports.list = function(req, res) {
    res.render('bloglist', { title: 'Blog List'});
};

// Get add blog page.
module.exports.add = function(req, res) {
    res.render('blogadd', { title: 'Add Blog'});
};