//alert(typeof document.getElementById("UL_ID"));
/*
for ( let li of document.getElementsByTagName("li"))
{
	//显示文本节点
	//alert(li.innerHTML);
	//alert(li.childNodes[0].nodeValue);
	//显示元素的其中一个属性
	alert(li.getAttribute("class"));
}
*/
/*
//给没有包含“class”的li标签加上“class”，并显示包含“class”属性的li标签文本节点
for ( let lk of document.getElementsByTagName("li"))
{
	if ( ! lk.getAttribute("class") ) lk.setAttribute("class","null line") ;
}
for ( let lk of document.getElementsByTagName("li"))
{
	if ( lk.getAttribute("class") ) alert ( lk.getAttribute("class") ) ;
}
*/
//确保在窗口加载完文档之后立即执行：
window.onload = js_after_load;

function js_after_load() {
	if (document.getElementsByClassName) {
		for (let pic of document.getElementsByClassName("newPic")) {
			pic.onclick = function () {
				show_pic(this);
				return false;
			}
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
	//不能实现firshChild.nodeValue的功能
	//document.getElementById("picTitle").firstChild.nodeValue = picLink.getAttribute("Title");
}
	//window.open("http://www.baidu.com","BaiDu","width=640 height=480");
