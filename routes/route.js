exports.home = function (req, res) {
  res.status(200).send("Hello World");
};


exports.login=function(req,res){ 
    res.render('login');
}

