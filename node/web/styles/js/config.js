$(function() {
	window.apiUrl="http://39.108.14.253:3000";
	//window.apiUrl="http://127.0.0.1:3000"
	mbFun();
	if($('.reInput').get(0)) {
		RegExpInput.REIfun({
			Inputobj: $('.reInput')
		})
	}
})

var mbFun = function() {
	var mvp = $('meta[name="viewport"]').get(0);
	var docW = document.documentElement.clientWidth;
	var devicewidth = '420';
	docW = (docW) / 420;
	var tvp = 'width=' + devicewidth + ',initial-scale=' + docW + ',user-scalable=no';
	mvp.setAttribute('content', tvp);
}