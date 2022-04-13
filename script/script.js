//确保在窗口加载完文档之后立即执行：
addOnLoad(js_after_load);

//使用递归方式添加window.onload动作，否则只会执行最后一个window.onload动作；
function addOnLoad(event) {
	if (typeof window.onload != 'function') {
		window.onload = event;
	}
	else {
		let oldOnLoad = window.onload;
		window.onload = function () {
			oldOnLoad();
			event();
		}
	}
}

function js_after_load() {
	if (!document.getElementById || !document.getElementsByTagName) return false;	//向后兼容
	//DOM方法两个get不能分开写
	let picList = document.getElementById("showPic").getElementsByTagName("a");
	for (let pic of picList) {
		pic.onclick = function () {
			show_pic(this);
			return false;
		}
	}
}

//把展位的图片替换成待显示的图片
function show_pic(picLink) {
	if (!document.getElementById || !picLink.innerHTML) return false;	//向后兼容
	let bnk = document.getElementById("bnk");
	bnk.setAttribute("src", picLink.getAttribute("href"));
	let picTitle = document.getElementById("picTitle")
	picTitle.innerHTML = picLink.getAttribute("Title");
}
