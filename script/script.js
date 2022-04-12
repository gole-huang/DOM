//确保在窗口加载完文档之后立即执行：
window.onload = js_after_load;

function js_after_load() {
	//if (!document.getElementById || !document.getElementsByTagName) return false;//向后兼容
	let picList = document.getElementById("showPic").childNodes;
	for (let pic of picList.getElementsByTagName("a")) {
		pic.onclick = function () {
			show_pic(this);
			return false;
		}
	}
}

//把展位的图片替换成待显示的图片
function show_pic(picLink) {
	if (document.getElementById && picLink.innerHTML) {
		let bnk = document.getElementById("bnk");
		bnk.setAttribute("src", picLink.getAttribute("href"));
		let picTitle = document.getElementById("picTitle")
		picTitle.innerHTML = picLink.getAttribute("Title");
	}
}
