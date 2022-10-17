/* To Disable Inspect Element  START */
$(document).bind("contextmenu",function(e) {
e.preventDefault();
});

$(document).keydown(function(e){
  if(e.which === 123){
     return false;
  }
});

document.onkeydown = function(e) {
if(event.keyCode == 123) {
  return false; }
if(e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)){
  return false; }
if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
  return false; }
if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
  return false; }
if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
  return false; }
if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)){
  return false; }
if(e.ctrlKey && e.keyCode == 'H'.charCodeAt(0)){
  return false; }
if(e.ctrlKey && e.keyCode == 'A'.charCodeAt(0)){
  return false; }
if(e.ctrlKey && e.keyCode == 'F'.charCodeAt(0)){
  return false; }
if(e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)){
  return false; } }

document.oncontextmenu = new Function("return false");

/* To Disable Inspect Element  END */

function save_data_json(f_name, dir, data) {
  jQuery.ajax({type: 'post', cache: false, url: save_script,
    data: {data_dir: dir,
      file_name: f_name + '.json', // the file type should be added
      exp_data: data }
    });
}

function save_data_csv(f_name, dir, data) {
  jQuery.ajax({type: 'post', cache: false, url: save_script,
      data: { data_dir: dir,
        file_name: f_name + '.csv', // the file type should be added
        exp_data: data }
      });
}

function saveData(f_name, dir, data){
    var xhr = new XMLHttpRequest();
    xhr.open('POST', backup_script);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({filename: f_name, directory: dir, filedata: data}));
}

// https://stackoverflow.com/questions/40362456/put-data-from-a-csv-file-into-an-array-javascript
// Create an array of objects
// Use the first line as keys
// Split by ","
function process(dataString) {
  //console.log(dataString);
  var lines = dataString.split(/\n/)
    .map(function(lineStr) {
        return lineStr.split(",");
    });
  var keys = lines[0];
  var objects = lines.slice(1)
    .map(function(arr) {
      return arr.reduce(function(obj, val, i) {
        obj[keys[i]] = val;
        return obj;
      }, {});
    });
  return JSON.stringify(objects, null, 2);
}

// Randomize array in-place using Durstenfeld shuffle algorithm 
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}

var main_stim_1 = "stim,type,corrResp\nstim_item,type_word,corrResp\nदर्शन,word,m\nप्ज,nonword,z\nजैशप,nonword,z\nलगभग,word,m\nबेहतर,word,m\nमुकट्री,nonword,z\nजाना,word,m\nजानकारी,word,m\nपत्र,word,m\nबाशनुभूति,nonword,z\nजऊंटल,nonword,z\nहेकोमा,nonword,z\nकरनी,word,m\nओयेंबिला,nonword,z";



var pract_stim_1 = "stim,type,corrResp\nstim_item,type_word,corrResp\nदर्शन,word,m\nप्ज,nonword,z\nजैशप,nonword,z\nलगभग,word,m\nबेहतर,word,m\nमुकट्री,nonword,z\nजाना,word,m\nजानकारी,word,m\nपत्र,word,m\nबाशनुभूति,nonword,z\nजऊंटल,nonword,z\nहेकोमा,nonword,z\nकरनी,word,m\nओयेंबिला,nonword,z";
