package servlet;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import dao.UsersDAO;
import model.Users;

/**
 * Servlet implementation class M_UserList
 */
@WebServlet("/M_UserList")
public class M_UserList extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		UsersDAO dao = new UsersDAO();
		List<Users> user = dao.getGeneralUser();
		makeJson(user, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}
	
	/**
	 * ユーザー一覧、ユーザー詳細のjsonデータ作成用メソッド
	 * @param list
	 * @param response
	 */
	private static void makeJson(List<Users> list, HttpServletResponse response) {
		ObjectMapper mapper = new ObjectMapper();
		
		try {
			String listJson = mapper.writeValueAsString(list);
			response.setCharacterEncoding("UTF-8");
			response.setContentType("application/json; charset=UTF-8");
			response.getWriter().write(listJson);
			System.out.println("Json : " + listJson);
			response.getWriter().flush();
			response.getWriter().close();
		}
		catch (JsonProcessingException e) {
			System.err.println("JsonProcessingException のエラーだよ");
			e.printStackTrace();
		}
		catch (Exception e) {
			System.err.println("Exception エラーだよ");
			e.printStackTrace();
		}
	}

}
