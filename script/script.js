// * 确保在窗口加载完文档之后立即执行：
addOnLoad(addImgAndTitle);
addOnLoad(showPicByJs);

// * 使用递归方式添加window.onload动作，否则只会执行最后一个；
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

// ?: 由鼠标点击、键盘空格事件触发显示图片
function showPicByJs() {
	try {
		let picList = document.getElementById("showPic").getElementsByTagName("a");	//DOM方法两个get不能分开写
		//IE 11不支持for of循环，只支持for循环；
		for (let i = 0; i < picList.length; i++) {
			picList[i].onclick = function () {
				return show_pic(this);
			}
			picList[i].onkeydown = function (event) {
				if (event.key == " ") {
					return show_pic(this);
				}
			}
		}
	} catch (err) {
		alert(err.message);
	}
}

// ?: 把展位的图片替换成待显示的图片，标题替换成待显示的标题
function show_pic(picLink) {
	try {
		let bnk = document.getElementById("bnk");
		let picTitle = document.getElementById("picTitle");
		bnk.setAttribute("src", picLink.getAttribute("href"));
		picTitle.firstChild.nodeValue = picLink.getAttribute("Title");
		return false;
	} catch (err) {
		alert(err.message);
		return true;
	}
}

// ?: 在特定元素前，添加指定元素
function addNodeBeforeTag(nodeName, targetName) {
	try {
		let node = document.createElement(nodeName);
		let target = document.getElementsByTagName(targetName)[0];
		target.parentNode.insertBefore(node, target);
	}
	catch (err) {
		alert(err.message);
	}
}

// ?: 在特定元素后，添加指定元素
function addNodeAfterTag(nodeName, targetName) {
	try {
		let node = document.createElement(nodeName);
		let target = document.getElementsByTagName(targetName)[0];
		if (target == target.parentNode.lastChild) {
			target.parentNode.appendChild(node);
		}
		else {
			target.parentNode.insertBefore(node, target.nextSibling);
		}
	}
	catch (err) {
		alert(err.message);
	}
}

// ?: 在特定元素前，添加指定元素并设置ID
function addNodeAndIdBeforeTag(nodeName, id, targetName) {
	try {
		let node = document.createElement(nodeName);
		node.setAttribute("id", id);
		let target = document.getElementsByTagName(targetName)[0];
		target.parentNode.insertBefore(node, target);
	}
	catch (err) {
		alert(err.message);
	}
}

// ?: 在特定元素后，添加指定元素并设置ID
function addNodeAndIdAfterTag(nodeName, id, targetName) {
	try {
		let node = document.createElement(nodeName);
		node.setAttribute("id", id);
		let target = document.getElementsByTagName(targetName)[0];
		if (target == target.parentNode.lastChild) {
			target.parentNode.appendChild(node);
		}
		else {
			target.parentNode.insertBefore(node, target.nextSibling);
		}
	}
	catch (err) {
		alert(err.message);
	}
}

// ?: 为指定ID的元素添加文本
function addNodeText(id, text) {
	let node = document.getElementById(id);
	let textNode = document.createTextNode(text);
	node.appendChild(textNode);
}

function addImgAndTitle() {
	addNodeAndIdAfterTag("strong", "picTitle", "ul");
	addNodeText("picTitle", "Please click on the picture");
	addNodeAndIdAfterTag("img", "bnk", "ul");
	let img = document.getElementById("bnk");
	img.setAttribute("width", "640");
	img.setAttribute("height", "480");
	img.setAttribute("alt", "show pic");
	//alert(document.getElementById("picTitle").firstChild.nodeValue);
}