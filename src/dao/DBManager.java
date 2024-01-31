package dao;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBManager {
	//oracle用
	private static final String CN_STRING = "jdbc:oracle:thin:@//10.40.112.11:1521/dbsys";
	private static final String USER =       "g2219";
	private static final String PASS =       "passdayo";
	
	//oracle用
	private static final String CN2_STRING = "jdbc:oracle:thin:@//10.40.112.11:1521/dbsys";
	private static final String USER2 =       "jz220125";
	private static final String PASS2 =       "passdayo";
	
	//xampp用
	private static final String CNX_STRING = "jdbc:mysql://localhost:3306/craft-leather";
	private static final String USERX =       "root";
	private static final String PASSX =       "root";
	
	private static DBManager self; // 自分を管理する変数
	/**
	 * コンストラクタ
	 */
	private DBManager() {
		try {
			Class.forName("com.mysql.jdbc.Driver");
//			Class.forName("oracle.jdbc.driver.OracleDriver");
		}
		catch(ClassNotFoundException e) {
			System.out.println("JDBCドライバのロードに失敗しました : " + e);
			return;
		}
	}
	/**
	 * インスタンスを取得するメソッド
	 */
	public static DBManager getInstance() {
		if (self == null) {		// まだ一度もインスタンス化してなければ
			self = new DBManager();
		}
		return self;
	}

	/**
	 * コネクションを取得
	 */
	protected Connection getConnection() throws SQLException {
//		return DriverManager.getConnection(CN_STRING, USER, PASS);
//		return DriverManager.getConnection(CN2_STRING, USER2, PASS2);
		return DriverManager.getConnection(CNX_STRING, USERX, PASSX);
	}
}
