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
// todo: Add an element with an "ID" attribute
function addNodeAndID(nodeName, id) {
    let node = document.createElement(nodeName);
    node.setAttribute("id", id);
    document.body.appendChild(node);
}

// todo: Add an element with an "ID" attribute before another element
function addNodeAndIdBefore(nodeName, id, targetName) {
    let node = document.createElement(nodeName);
    node.setAttribute("id", id);
    try {
        let targetNode = document.getElementsByTagName(targetName)[0];
        targetNode.parentNode.insertBefore(node, targetNode);
    }
    catch (e) {
        alert(e.ToString());
    }
}

// todo: Modify a textnode with "strong" element
function modTextWithStrong(id, strongText) {
    if (document.getElementById(id) == null) {
        alert("id is not exist");
        return false;
    }
    let p = document.getElementById(id);
    let wholeText = p.firstChild.nodeValue;
    if (wholeText.indexOf(strongText) == -1) {
        alert(strongText + " is not in " + wholeText);
        return false;
    }
    p.firstChild.nodeValue = "";
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

// todo: Modify a textnode with "emphasis" element
function modTextWithEmphasis(id, emphasisText) {
    if (document.getElementById(id) == null) {
        alert("id is not exist");
        return false;
    }
    let p = document.getElementById(id);
    let wholeText = p.firstChild.nodeValue;
    if (wholeText.indexOf(emphasisText) == -1) {
        alert(emphasisText + " is not in " + wholeText);
        return false;
    }
    p.firstChild.nodeValue = "";
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

function test() {
    addNodeAndIdBefore("strong", "picTitle", "ul");
    addNodeAndIdBefore("img", "bnk", "ul");
    let img = document.getElementById("img");
    img.setAttribute("width", "640");
    img.setAttribute("height", "480");
    img.setAttribute("alt", "show pic");
}

addOnLoadEvent(test);
//addOnLoadEvent(addTextWithEmphasis("p1", "Hello,My name is Gole.Nice to meet you.", "Nice to meet you."));