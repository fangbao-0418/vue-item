
var host = "http://www.ey99.com/";
var api_path = "api/mobile/";
export default {
	integral: host + api_path + "integral.php", //成长值接口
	info: host + api_path + "info.php", //会员信息接口
	auth: host + api_path + "auth.php",
	validate: host + api_path + "sendvalidate.php",
	register: host + api_path + "register.php",
	hits: host + api_path + "hits.php",//浏览数接口
	report: host + api_path + "report.php",//举报接口
	avatarupload: host + api_path + "avatarupload.php",//头像上传接口
	region: host + api_path + "region.php", //地区接口
	video: host + api_path + "video.php", //视频接口
	agency: host + api_path + "agency.php",
	article: host + api_path + "article.php",
	investment: host + api_path + "investment.php",
	recommend: host + api_path + "recommend.php", //推荐接口
	collect: host + api_path + "collect.php",//收藏接口
	mycollect: host + api_path + "mycollect.php",//会员收藏列表接口
	backpassword: host + api_path + "backpassword.php",//找回密码接口
	feedback: host + api_path + "feedback.php",//意见反馈接口
}