
var host = "http://www.ey99.com/";
var api_path = "api/mobile/";
export default {
	integral: host + api_path + "integral.php", //成长值接口
	info: host + api_path + "info.php", //会员信息接口
	auth: host + api_path + "auth.php",
	validate: host + api_path + "sendvalidate.php",
	register: host + api_path + "register.php",
	avatarupload: host + api_path + "avatarupload.php",
	region: host + api_path + "region.php", //地区接口
	video: host + api_path + "video.php", //视频接口
	article: host + api_path + "article.php",
	investment: host + api_path + "investment.php",
	recommend: host + api_path + 'recommend.php', //推荐接口
	collect: host + api_path + 'collect.php',//收藏接口
	mycollect: host + api_path + 'mycollect.php',//会员收藏列表接口
}