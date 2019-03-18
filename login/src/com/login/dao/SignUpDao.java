package com.login.dao;
import java.sql.*;

public class SignUpDao 
{
	String url = "jdbc:mysql://localhost:3306/project";
	String uname = "root";
	String pass ="Rajakishore@1";
	
	public void signup(String uname, String pass)
	{
		try
		{
			String update = "insert into login values(?,?)";
			Connection con = DriverManager.getConnection(url, uname, pass);
			PreparedStatement st = con.prepareStatement(update);
			st.setString(1,uname);
			st.setString(2, pass);
			int count = st.executeUpdate(update);
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
	}
}
