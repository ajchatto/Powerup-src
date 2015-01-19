import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.sql.*;

/*

Input param: Duration, Days


*/
class test {
    public static void main(String[] args) {
        System.out.println("Hello World!" + 10); // Display the string.
        //System.out.println(" Min >> " + minFunction(5,10));
        // java test 1009 45 Sun
        calcutateSchedule(args[0], Integer.parseInt(args[1]), args[2]);
        //updateDb("delete from powerup.Offering_Schedule where offering_id = '1009'"); 

    }

    public static void calcutateSchedule(String offeringId, int duration, String day) {
      String strStartTime = "09:00:00";
      String strEndTime = "09:00:00";
      String myTime = strStartTime;
      String insertSQL;
      java.util.Date startTime = java.sql.Time.valueOf(strStartTime);
      java.util.Date endTime = java.sql.Time.valueOf(strEndTime);
      
      try {
      	startTime = java.sql.Time.valueOf(strStartTime);
      	System.out.println ("start time : " + startTime);

 	SimpleDateFormat df = new SimpleDateFormat("HH:mm");
 	Date d = df.parse(myTime);
 	Calendar cal = Calendar.getInstance();
 	cal.setTime(d);

   	while (endTime.before(java.sql.Time.valueOf("20:00:00")))	
 	{
                startTime = cal.getTime();
   		cal.add(Calendar.MINUTE, duration);
   		endTime = cal.getTime();
                insertSQL = "INSERT INTO Offering_Schedule (offering_id,start_time,end_time,days,no_of_seats,available_seats) VALUES ('" + offeringId + "', '" + df.format(startTime) + "', '" + df.format(endTime) + "', '" + day + "', 20, 15);"; 
		System.out.println("SQL : " + insertSQL);
                updateDb(insertSQL);
                if (endTime.before(java.sql.Time.valueOf("20:00:00"))) {
   			//System.out.println ("End Time before 8PM");
		}
 	}
      }
      catch (Exception e) {
  	e.printStackTrace();
      }
    }

/*
public static String[] getDays(){
 String days[];
 
 days[0] = "Sun";
 days[1] = "Mon";
 days[2] = "Tue";

 return days;
}
*/

public static void updateDb(String sql) {
try
{
  // create a java mysql database connection
  String myDriver = "org.gjt.mm.mysql.Driver";
  String myUrl = "jdbc:mysql://127.0.0.1:3306/powerup";
  Class.forName(myDriver);
  Connection conn = DriverManager.getConnection(myUrl, "root", "");
  Statement stmt = conn.createStatement();

  // your prepstatements goes here...
  //sql = "select * from Offering";
  //sql = "select * from Offering where provider_name = 'Sutton Swim School'";
  // "delete from powerup.Offering_Schedule where offering_id = '1009'";

/*
  ResultSet rs = stmt.executeQuery(sql);
  while (rs.next()){
    System.out.println("Name : " + rs.getString("name"));
    System.out.println("Duration : " + rs.getString("Duration"));
    System.out.println("Category : " + rs.getString("category"));
  }
  rs.close();
*/
  stmt.executeUpdate(sql);

  stmt.close();
  conn.close();
}
catch (Exception e)
{
  System.err.println("Got an exception! ");
  System.err.println(e.getMessage());
}
}


}
