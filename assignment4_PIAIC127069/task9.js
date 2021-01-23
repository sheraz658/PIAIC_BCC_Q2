var html = "<p> <strong> Hello, <b>World</b>";
html = html.replace(/(<([^>]+)>)/ig ,"");
document.write("<br> output: <br>" + html);     