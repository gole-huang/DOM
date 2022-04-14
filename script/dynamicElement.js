addParagraph("Hello World");

function addParagraph(text) {
    let p = document.createElement("p");
    let t = document.createTextNode(text);
    p.appendChild(t);
    document.body.appendChild(p);
}
