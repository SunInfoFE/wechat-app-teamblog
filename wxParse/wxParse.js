

var showdown = require('showdown.js');
var HtmlToJson = require('html2json.js');
var wxDiscode = require('wxDiscode.js');
//type 'json','html','markdown'/'md'

function wxParse(type,data){
  var wxParseData = [];
  if(type == 'json'){
    var json = HtmlToJson(html);
	  console.log(JSON.stringify(json, ' ', ' '));
    wxParseData = json.child;
  }else if(type == 'html'){
    data = wxDiscode.strDiscode(data);
    var json = HtmlToJson(data);
	  // console.log(JSON.stringify(json, ' ', ' '));
    wxParseData = json.child;
  }else if(type == 'md' || type == 'markdown'){
    var converter = new showdown.Converter();
    var html      = converter.makeHtml(data);
    html = wxDiscode.strDiscode(html);
    var json = HtmlToJson(html);
	  console.log(JSON.stringify(json, ' ', ' '));
    wxParseData = json.child;
  }

  return wxParseData;
}
module.exports = wxParse;


