
var host = "http://www.ey99.com/";
var api_path = "api/mobile/";
export default {
	integral: host + api_path + "integral.php", //成长值接口
	info: host + api_path + "info.php", //会员信息接口
	auth: host + api_path + "auth.php",
	validate: host + api_path + "sendvalidate.php",
	register: host + api_path + "register.php",
	avatarupload: host + api_path + "avatarupload.php",
	origin: host + api_path + "origin.php" //地区接口
}