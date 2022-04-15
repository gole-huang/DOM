function addOnLoadEvent(event) {
    if (window.onload != 'function') {
        window.onload = event;
    }
    else {
        let oldEvent = window.onload;
        oldEvent();
        event();
    }
}
function addNodeAndID(nodeName, id) {
    let node = document.createElement(nodeName);
    node.setAttribute("id", id);
    document.body.appendChild(node);
}

function modTextWithStrong(id, strongText) {
    if (document.getElementById(id) == null) {
        alert("id is not exist");
        return false;
    }
    let p = document.getElementById(id);
    let wholeText = p.innerHTML;
    if (wholeText.indexOf(strongText) == -1) {
        alert(strongText + " is not in " + wholeText);
        return false;
    }
    p.innerHTML = "";
    let st = document.createElement("strong");
    let headText = wholeText.slice(0, wholeText.indexOf(strongText));
    let tailText = wholeText.slice(wholeText.indexOf(strongText) + strongText.length);
    let headNode = document.createTextNode(headText);
    let strongNode = document.createTextNode(strongText);
    let tailNode = document.createTextNode(tailText);
    st.appendChild(strongNode);
    p.appendChild(headNode);
    p.appendChild(st);
    p.appendChild(tailNode);
    return true;
}

function modTextWithEmphasis(id, emphasisText) {
    if (document.getElementById(id) == null) {
        alert("id is not exist");
        return false;
    }
    let p = document.getElementById(id);
    let wholeText = p.innerHTML;
    if (wholeText.indexOf(emphasisText) == -1) {
        alert(emphasisText + " is not in " + wholeText);
        return false;
    }
    p.innerHTML = "";
    let em = document.createElement("em");
    let headText = wholeText.slice(0, wholeText.indexOf(emphasisText));
    let tailText = wholeText.slice(wholeText.indexOf(emphasisText) + emphasisText.length);
    let headNode = document.createTextNode(headText);
    let emphasisNode = document.createTextNode(emphasisText);
    let tailNode = document.createTextNode(tailText);
    em.appendChild(emphasisNode);
    p.appendChild(headNode);
    p.appendChild(em);
    p.appendChild(tailNode);
    return true;
}

/*
		<img id="bnk" width="640" height="480" alt="show pic" />
		<strong id="picTitle"></strong>
*/
function test(){
    addNodeAndID("img", "bnk");
    let img = document.getElementById("img");
    img.setAttribute("width", "640");
    img.setAttribute("height", "480");
    img.setAttribute("alt", "show pic");
    addNodeAndID("strong", "picTitle");
}

addOnLoadEvent(test);
//addOnLoadEvent(addTextWithEmphasis("p1", "Hello,My name is Gole.Nice to meet you.", "Nice to meet you."));