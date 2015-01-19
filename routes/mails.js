exports.compose = function(req, res){
  res.render('compose_mail',{page_title:"Compose mail"});
};

exports.send = function(req,res){


var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();
transporter.sendMail({
    from: 'ajchatto10@gmail.com',
    to: 'ajchatto10@gmail.com',
    subject: 'hello',
    text: 'hello world!'
});

/*
     var id = req.params.id;

     req.getConnection(function (err, connection) {

        connection.query("DELETE FROM offering  WHERE id = ? ",[id], function(err, rows)
        {

             if(err)
                 console.log("Error deleting : %s ",err );

             res.redirect('/offerings');

        });

     });
*/

};

