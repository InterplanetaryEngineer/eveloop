'use strict';
var text = document.getElementsByTagName("textaerea").value;
var code = parseTopLevel(text);
var names = {};

for(var element in code.body) {
    if(element.type == "VariableDeclaration") {
        names.push(element.declarations[0].id.name);
    }
}
