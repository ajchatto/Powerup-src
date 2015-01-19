
/*
 * GET users listing.
 */
exports.list = function(req, res){

  req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM offering',function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('offerings',{page_title:"Offering Listings",data:rows});
         });
         
         //console.log(query.sql);
    });
  
};

exports.add = function(req, res){
  res.render('add_offering',{page_title:"Add Offering"});
};

exports.edit = function(req, res){
    
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
    var query = connection.query('SELECT * FROM offering where id = ?',[id],function(err,rows)

    {
            
            if(err)
                console.log("Error Selecting : %s ",err );

var query1 = connection.query('SELECT b.* FROM offering a, offering_schedule b where a.id = b.offering_id and a.id = ?',[id],function(err,offering_schedule_rows)
        {
            if(err)
                console.log("Error Selecting : %s ",err );

res.render('schedules',{page_title:"Schedule Details",offering_data:rows, offering_schedule_data:offering_schedule_rows});

        });
        });

         //console.log(query.sql);
    }); 
};

/*Save the customer*/
exports.save = function(req,res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    var day = '';

         console.log(input.age);

    req.getConnection(function (err, connection) {
        
        var data = {
            
            name     	: input.name,
            category 	: input.category,
            age      	: input.age,
            start_date 	: input.start_date,
            end_date 	: input.end_date,
            frequency 	: input.frequency,
            duration 	: input.duration,
            price    	: input.price,
            price_unit  : input.price_unit,
            days	: day,
            sun         : input.sun,
            mon         : input.mon,
            tue         : input.tue,
            wed         : input.wed,
            thu         : input.thu,
            fri         : input.fri,
            sat         : input.sat
        };

        var query = connection.query("INSERT INTO offering set ? ",data, function(err, rows)
        {
  
          if (err)
              console.log("Error inserting : %s ",err );
         
          res.redirect('/offerings');
          
        });
        
       // console.log(query.sql); get raw query
    
    });
};

exports.delete_schedule = function(req,res){

     var id = req.params.id;

     req.getConnection(function (err, connection) {

        connection.query("DELETE FROM offering_schedule  WHERE id = ? ",[id], function(err, rows)
        {

             if(err)
                 console.log("Error deleting : %s ",err );

             res.redirect('/offerings');

        });

     });

};


