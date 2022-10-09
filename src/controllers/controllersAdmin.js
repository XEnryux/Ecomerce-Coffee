const path = require('path'); 
const fs = require('fs'); 

module.exports = {
    list: (req, res) => 
    res.render('/admin/list')
}