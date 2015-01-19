
/*
 * GET users listing.
 */

exports.list = function(req, res){

  req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM enrollment',function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('enrollments',{page_title:"Enrollment Listings",data:rows});
         });
         
         //console.log(query.sql);
    });
  
};

exports.add = function(req, res){
    var id = req.params.id;
    req.getConnection(function(err,connection){

        var query = connection.query('SELECT * FROM offering where id = ?',[id],function(err,rows)
        {
            if(err)
                console.log("Error Selecting : %s ",err );
        

//var query1 = connection.query('SELECT b.tuesday, ifnull(b.sunday, 'disabled') sun, ifnull(b.monday, 'disabled') mon, ifnull(b.tuesday, 'disabled') tue, ifnull(b.wednesday, 'disabled') wed, ifnull(b.thursday, 'disabled') thu, ifnull(b.friday, 'disabled') fri, ifnull(b.saturday, 'disabled') sat, start_time, end_time, no_of_seats FROM offering a, offering_schedule b where a.id = b.offering_id and a.id = ?',[id],function(err,offering_schedule_rows)

var query1 = connection.query('SELECT b.* FROM offering a, offering_schedule b where a.id = b.offering_id and a.id = ?',[id],function(err,offering_schedule_rows)
        {
            if(err)
                console.log("Error Selecting : %s ",err );

res.render('add_enrollment',{page_title:"Add Enrollment",offering_data:rows, offering_schedule_data:offering_schedule_rows});

        });
        });

         //console.log(query.sql);
    });

};

exports.edit = function(req, res){
    
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM offering WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('edit_offering',{page_title:"Offering Details",data:rows});
           
         });
         
         //console.log(query.sql);
    }); 
};

/*Save the customer*/
exports.save = function(req,res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    
    req.getConnection(function (err, connection) {
        
/* Customer */
        var customer_data = {

            student_first_name     : input.student_first_name,
            student_last_name      : input.student_last_name,
            student_email_address  : input.student_email_address,
            student_phone          : input.student_phone,
            parent_first_name      : input.parent_first_name,
            parent_last_name       : input.parent_last_name,
            parent_email_address   : input.parent_email_address,
            parent_cell_phone      : input.parent_cell_phone,
            parent_work_phone      : input.parent_work_phone,
            parent_home_phone      : input.parent_home_phone,
            address1               : input.address1,
            address2               : input.address2,
            city                   : input.city,
            state                  : input.state,
            postal                 : input.postal,
            payment_mode           : input.payment_mode,
            card_type              : input.card_type

        };

        var query = connection.query("INSERT INTO customers set ? ",customer_data, function(err, rows)
        {
  
          if (err)
              console.log("Error inserting : %s ",err );

/* Enrollments */
        var enroll_data = {

            provider_id                 : 1001, /* input.provider_id,*/
            provider_name               : 'Sutton Swim School', /* input.provider_name,*/
            offering_id                 : input.offering_id,
            offering_name               : input.offering_name,
            offering_schedule_id        : input.offering_schedule_id,
            student_contact_id          : input.student_contact_id, 
            student_contact_name        : input.student_first_name + ", " + input.student_last_name,
            parent_contact_id           : input.parent_contact_id,
            parent_contact_name         : input.parent_first_name + ", " + input.parent_last_name,
            start_date                  : input.start_date,
            offering_days               : input.offering_dates,
            start_offering_time         : input.start_offering_time,
            end_offering_time           : input.end_offering_time,
            payment_mode                : input.payment_mode
        };

        var query1 = connection.query("INSERT INTO enrollment set ? ",enroll_data, function(err, rows)
        {
          if (err)
              console.log("Error inserting : %s ",err );
         
          res.redirect('/offerings');
          
        });
        });
        
       // console.log(query.sql); get raw query
    
    });
};

exports.save_edit = function(req,res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {

            name     	: input.name,
            category 	: input.category,
            age      	: input.age,
            start_date 	: input.start_date,
            end_date 	: input.end_date,
            duration 	: input.duration,
            price    	: input.price,
            price_unit  : input.price_unit,
            
        };
        
        connection.query("UPDATE offering set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );

          res.redirect('/offerings');
          
        });
    
    });
};


exports.delete_customer = function(req,res){
          
     var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM provider  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/customers');
             
        });
        
     });
};


