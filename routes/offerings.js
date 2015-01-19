
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

exports.search = function(req, res){

  var input = JSON.parse(JSON.stringify(req.body));
         console.log("SEARCH: Input: " + input.toString() );
  var category = input.Category;
         console.log("SEARCH: Category selected: " + category );
  req.getConnection(function(err,connection){

        var qryStr = 'SELECT * FROM offering';
/*
        if (input.Category != 'All categories') {
		var = var + " WHERE category = ?"; 	
*/

        var query = connection.query('SELECT * FROM offering where category = ?', [category], function(err,rows)
        {

            if(err)
                console.log("Error Selecting : %s ",err );

            res.render('search_offerings',{page_title:"Offering Listings",data:rows});
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
       
        var query = connection.query("SELECT if(a.sun ='Y', 'Checked', '') sunday, if(a.mon='Y', 'Checked', '') monday, if(a.tue='Y', 'Checked', '') tueday, if(a.wed='Y', 'Checked', '') wedday, if (a.thu='Y', 'Checked', '') thuday, if (a.fri='Y', 'Checked', '') friday, if (a.sat='Y', 'Checked', '') satday, a.* FROM offering a WHERE a.id = ?",[id],function(err,rows)
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
    var day = '';

         console.log(input.age);

    if (input.sun == 'Y') day = 'Sun';
    if (input.mon == 'Y') {
        if (day != '') day = day +', Mon'
        else (day = 'Mon')};

    if (input.tue == 'Y') {
        if (day != '') day = day +', Tue'
        else (day = 'Tue')};


    if (input.wed == 'Y') {
        if (day != '') day = day +', Wed'
        else (day = 'Wed')};

    if (input.thu == 'Y') {
        if (day != '') day = day +', Thu'
        else (day = 'Thu')};

    if (input.fri == 'Y') {
        if (day != '') day = day +', Fri'
        else (day = 'Fri')};

    if (input.sat == 'Y') {
        if (day != '') day = day +', Sat'
        else (day = 'Sat')};

 
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

exports.save_edit = function(req,res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    var day = '';

    if (input.sun == 'Y') day = 'Sun';
    if (input.mon == 'Y') {
	if (day != '') day = day +', Mon'
	else (day = 'Mon')};

    if (input.tue == 'Y') {
	if (day != '') day = day +', Tue'
	else (day = 'Tue')};


    if (input.wed == 'Y') {
	if (day != '') day = day +', Wed'
	else (day = 'Wed')};

    if (input.thu == 'Y') {
	if (day != '') day = day +', Thu'
	else (day = 'Thu')};

    if (input.fri == 'Y') {
	if (day != '') day = day +', Fri'
	else (day = 'Fri')};

    if (input.sat == 'Y') {
	if (day != '') day = day +', Sat'
	else (day = 'Sat')};

//    console.log(day);
 
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
            sun  	: input.sun,
            mon  	: input.mon,
            tue  	: input.tue,
            wed  	: input.wed,
            thu  	: input.thu,
            fri  	: input.fri,
            sat  	: input.sat
            
        };
        
        connection.query("UPDATE offering set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );

          res.redirect('/offerings');
          
        });
    
    });
};

exports.delete_offering = function(req,res){

     var id = req.params.id;

     req.getConnection(function (err, connection) {

        connection.query("DELETE FROM offering  WHERE id = ? ",[id], function(err, rows)
        {

             if(err)
                 console.log("Error deleting : %s ",err );

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


