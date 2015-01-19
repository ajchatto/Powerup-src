
/*
 * GET users listing.
 */

exports.list = function(req, res){

  req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM customers' ,function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('customers',{page_title:"Customer Listings", customer_data:rows});
                
           
         });
         
         //console.log(query.sql);
    });
  
};

exports.add = function(req, res){
  res.render('add_customer',{page_title:"Add Customers - Node.js"});
};

exports.edit = function(req, res){
    
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM customers WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('edit_customer',{page_title:"Customer Details",customer_data:rows});
                
           
         });
         
         //console.log(query.sql);
    }); 
};

/*Save the customer*/
exports.save = function(req,res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
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
            address1 		   : input.address1,
            address2 		   : input.address2,
            city     		   : input.city,
            state    		   : input.state,
            postal 		   : input.postal,
            payment_mode	   : input.payment_mode,
            card_type 		   : input.card_type
        
        };
        
        var query = connection.query("INSERT INTO customers set ? ",data, function(err, rows)
        {
  
          if (err)
              console.log("Error inserting : %s ",err );
         
          res.redirect('/customers');
          
        });
        
       // console.log(query.sql); get raw query
    
    });
};

exports.save_edit = function(req,res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {

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
        
        connection.query("UPDATE customers set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );

          res.redirect('/customers');
          
        });
    
    });
};


exports.delete_customer = function(req,res){
          
     var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM customers WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/customers');
             
        });
        
     });
};


