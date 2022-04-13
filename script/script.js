//确保在窗口加载完文档之后立即执行：
addOnLoad(js_after_load);

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
}	//使用递归方式添加window.onload动作，否则只会执行最后一个window.onload动作；

function js_after_load() {
	try {
		let picList = document.getElementById("showPic").getElementsByTagName("a");	//DOM方法两个get不能分开写
		for (let pic of picList) {
			pic.onclick = function () {
				return show_pic(this);
			}
		}
	} catch (err) {
		alert(err.message);
	}
}

//把展位的图片替换成待显示的图片
function show_pic(picLink) {
	try {
		let bnk = document.getElementById("bnk");
		let picTitle = document.getElementById("picTitle");
		bnk.setAttribute("src", picLink.getAttribute("href"));
		picTitle.innerHTML = picLink.getAttribute("Title");
		return false;
	} catch (err) {
		alert(err.message);
		return true;
	}
}
