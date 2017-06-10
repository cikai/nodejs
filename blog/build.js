var fs = require('fs');
var path = require('path');
var markdown = require('markdown').markdown;

let dir = path.join(__dirname, './posts');
let filelist = fs.readdirSync(dir);
let catalog = new Array();

// create *.html after converting markdown to html
let header = fs.readFileSync('./docs/common/header.html');
let footer = fs.readFileSync('./docs/common/footer.html');
deleteAll('./docs/html/');
for (file of filelist) {
  catalog.push({file: file});
  let content = fs.readFileSync('./posts/' + file);
  let code = markdown.toHTML(content.toString());
  let html = header + code + footer;
  let newfile = './docs/html/' + file.split('.')[0] + '.html';
  fs.writeFile(newfile, html, function (err) {
    if (err) throw err;
    console.log(newfile + ' has been created !');
  });
}

// create catalog.json
let catalog_json = './docs/js/catalog.json';
fs.writeFile(catalog_json, JSON.stringify(catalog), function (err) {
  if (err) throw err;
  console.log('catalog.json has been created !');
});

function deleteAll(path) {
  let files = [];
  if(fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach(function(file, index) {
      let curPath = path + "/" + file;
      if(fs.statSync(curPath).isDirectory()) {
        deleteall(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
  }
};
