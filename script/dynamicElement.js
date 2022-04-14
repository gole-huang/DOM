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
/*addParagraph("Hello World");
function addParagraph(text) {
    let p = document.createElement("p");
    let t = document.createTextNode(text);
    p.appendChild(t);
    document.body.appendChild(p);
}

StrongText("Hello World");
addEmphasisText("Hello World");
//添加带有“加粗”和“斜体”的文本
function addStrongText(text) {
    let p = document.createElement("p");
    let t = document.createTextNode(text);
    let strong = document.createElement("strong");
    strong.appendChild(t);
    p.appendChild(strong);
    document.body.appendChild(p);
}

function addEmphasisText(text) {
    let p = document.createElement("p");
    let t = document.createTextNode(text);
    let em = document.createElement("em");
    em.appendChild(t);
    p.appendChild(em);
    document.body.appendChild(p);
}
*/
/*
* TODOs : 在一个文本节点内添加一个加粗的文本，添加一个斜体的文本；

function modTextStrong(id, text) {
    let p = document.getElementById(id);
    p.innerHTML = p.innerHTML.replace(text, `<strong>${text}</strong>`);
}
function modTextEmphasis(id, text) {
    let p = document.getElementById(id);
    p.innerHTML = p.innerHTML.replace(text, `<em>${text}</em>`);
}

addOnLoadEvent(addNodeAndID("p", "p1"));
addOnLoadEvent(document.getElementById("p1").innerHTML = "Hello,My name is Gole.Nice to meet you.");
addOnLoadEvent(modTextStrong("p1", "Gole"));
addOnLoadEvent(modTextEmphasis("p1", "Nice to meet you."));
*/

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

function test(){
    addNodeAndID("p", "p1");
    let str = document.createTextNode("Hello,My name is Gole.Nice to meet you.");
    let p = document.getElementById("p1");
    p.appendChild(str);
    modTextWithEmphasis("p1", "meet you");
}

addOnLoadEvent(test);
//addOnLoadEvent(addTextWithEmphasis("p1", "Hello,My name is Gole.Nice to meet you.", "Nice to meet you."));