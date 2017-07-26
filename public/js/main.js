var codeEditor = CodeMirror.fromTextArea(codeArea, {
	value: '',
	theme: 'mdn-like',
	indentUnit: 1,
	lineNumbers: true,
	mode: {name: "javascript", json: true},
	matchBrackets: true,
});
console.log(codeEditor);
var htmlEditor = CodeMirror.fromTextArea(htmlArea, {
	value: '',
	theme: 'mdn-like',
	indentUnit: 1,
	lineNumbers: true,
	matchBrackets: true,
});

var cssEditor = CodeMirror.fromTextArea(cssArea, {
	value: '',
	theme: 'mdn-like',
	indentUnit: 1,
	lineNumbers: true,
	matchBrackets: true,
});

var res = document.getElementById("resArea");

function clear() {
	codeEditor.setValue('');
	htmlEditor.setValue('');
	cssEditor.setValue('');
	console.log('clear');
}

clearButton.addEventListener("click", clear);

function reload() {
	res.contentWindow.location.reload();
}

var code = '';
var html = '';
var css = '';

function logUpdates() {
	console.log('Code:\n' + codeEditor.getValue());
	console.log('HTML:\n' + htmlEditor.getValue());
	console.log('CSS:\n' + cssEditor.getValue());
}

document.addEventListener("keydown", logUpdates);

function writeResult() {
	code = codeEditor.getValue();
	html = htmlEditor.getValue();
	css = cssEditor.getValue();

	res.contentWindow.document.open();
	res.contentWindow.document.write(html);
	res.contentWindow.document.write('<script>'+code+'</script>');
	res.contentWindow.document.close();

	style = document.createElement('style');
		// style.type = "text/css";
		style.innerHTML = css;
	res.contentWindow.document.getElementsByTagName('head')[0].appendChild(style);
}

updateButton.addEventListener("click", writeResult);
