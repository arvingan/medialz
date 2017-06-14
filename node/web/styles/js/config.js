if(document.location.href.indexOf("127.0.0.1")!=-1){
		window.apiUrl="http://127.0.0.1:3000";
	}else{
		
		window.apiUrl="http://39.108.14.253:3000";
	}
$(function() {
	
	
	
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

//Cookie取，存，删
function getCookieValue(name) {
	var name = escape(name);
	var allcookies = document.cookie;
	name += "=";
	var pos = allcookies.indexOf(name);
	if(pos != -1) {
		var start = pos + name.length;
		var end = allcookies.indexOf(";", start);
		if(end == -1) end = allcookies.length;
		var value = allcookies.substring(start, end);
		return unescape(value);
	} else return "";
}

function setCookie(name, value, hours, path) {
	var name = escape(name);
	var value = escape(value);
	var expires = new Date();
	expires.setTime(expires.getTime() + hours * 3600000 * 24);
	if(typeof(path) != "undefined") {
		path = path == "" ? ";path=/" : ";path=" + path;
	} else {
		path = ";path=/"
	}
	expires = (typeof hours) == "string" ? "" : ";expires=" + expires.toUTCString();
	document.cookie = name + "=" + value + expires + path;
};

function deleteCookie(name, path) {
	var name = escape(name);
	var expires = new Date(0);
	if(typeof(path) != "undefined") {
		path = path == "" ? ";path=/" : ";path=" + path;
	} else {
		path = ";path=/"
	}
	document.cookie = name + "=" + ";expires=" + expires.toUTCString() + path;
};