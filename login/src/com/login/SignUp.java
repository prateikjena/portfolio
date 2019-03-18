package com.login;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.login.dao.SignUpDao;

public class SignUp 
{
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		String uname = request.getParameter("uname");
		String pass = request.getParameter("pass");
		
		SignUpDao dao = new SignUpDao();
		dao.signup(uname, pass);
	}
}
