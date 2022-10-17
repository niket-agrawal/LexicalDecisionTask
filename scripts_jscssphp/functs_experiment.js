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

var main_stim_1 = "stim,type,corrResp\nपगडंडी,word,m\nव्याधि,word,m\nपोखर,word,m\nसंदूषण,word,m\nअर्निकामन,nonword,z\nरोकड़िया,word,m\nठेस,word,m\nदेह,word,m\nअखिश,nonword,z\nम्लेच्छ,word,m\nमढ़ैर,nonword,z\nजेद्रजेंदु,nonword,z\nखुचवण,nonword,z\nअरतिनाध्यापण,nonword,z\nखूग,nonword,z\nप्राधिकार,word,m\nपर्ण,word,m\nअधिभक,nonword,z\nनिरायना,nonword,z\nभूमिति,word,m\nपित्च,nonword,z\nआजीविका,word,m\nशोषित,word,m\nसिरणार्स,nonword,z\nमंजूषा,word,m\nगबना,nonword,z\nलालायित,word,m\nस्यंदन,word,m\n﻿प्रतिकर्षी,word,m\nउधति,nonword,z\nजुर्झत,nonword,z\nआभा,word,m\nक्रंदन,word,m\nतिषय,nonword,z\nसुरम्य,word,m\nअनाकष्ट,nonword,z\nकुरगुम,nonword,z\nशत्फ,nonword,z\nहौलताल,nonword,z\nस्वर,word,m\nकूच,word,m\nदशक,word,m\nअतीत,word,m\nमूर्छित,word,m\nउतयंक,nonword,z\nप्रयोजन,word,m\nअनिऊंर,nonword,z\nअभिनशन,nonword,z\nफिहमना,nonword,z\nसुबकना,word,m\nकंदरा,word,m\nप्रसिद्ध,word,m\nपुश्री,nonword,z\nउद्यम,word,m\nनाभिक,word,m\nखूपा,nonword,z\nटिंर,nonword,z\nव्यथा,word,m\nरूथापाती,nonword,z\nपहलू,word,m\nप्रथा,word,m\nसमायावसार,nonword,z\nसमग्र,word,m\nदंश,word,m\nअंतरण,word,m\nअव्वल,word,m\nपर्मी,nonword,z\nभिश्ती,word,m\nकपोल,word,m\nसर्मिख,nonword,z\nचाबुक,word,m\nअजनबी,word,m\nसिरंपरक,nonword,z\nअफखोल,nonword,z\nपहर,word,m\nविनीस,nonword,z\nकिसलगीर,nonword,z\nधांगुर,nonword,z\nकाष्ट्रमषा,nonword,z\nविशाल,word,m\nपरिपान,nonword,z\nसपता,nonword,z\nओस्यालन,nonword,z\nइंत्राक,nonword,z\nअभिनिपराक्ति,nonword,z\nभेद,word,m\nतजुकिना,nonword,z\nसहोदर,word,m\nधन्दु,nonword,z\nऔत्सुक्य,word,m\nबाह्य,word,m\nसीड़ना,nonword,z\nअकयतस्था,nonword,z\nडांगनी,nonword,z\nसभ्य,word,m\nअसली,word,m\nसंचय,word,m\nगोईचारों,nonword,z\nबंगाम,nonword,z\nशशक,word,m\nमोर्यसंरण,nonword,z\nपहगी,nonword,z\nप्रभालत,nonword,z\nरतालू,word,m\nअभ्यस्त,word,m\nआनेवारा,nonword,z\nसलहज,word,m\nउपभोग,word,m\nसाही,word,m\nइकाक,nonword,z\nऋतु,word,m\nबधिर,word,m\nपेचीदा,word,m\nचिरौंठी,nonword,z\nधुंसर,nonword,z\nगद्य,word,m\nकारगी,nonword,z\nपिपासा,word,m\nस्निग्ध,word,m\nभरकरी,nonword,z\nधौंडा,nonword,z\nभरोसा,word,m\nविस्मय,word,m\nपड़ोशाई,nonword,z\nतिषमा,nonword,z\nउन्माद,word,m\nअल्प,word,m\nजल्मांवाज़ी,nonword,z\nअनुयायी,word,m\nकोषीण,nonword,z\nसुचारु,word,m\nप्रचाहित,nonword,z\nमौसम,word,m\nअभ्रक,word,m\nसकुरे,nonword,z\nक्रन्ते,nonword,z\nदूस्ती,nonword,z\nस्वायत्तता,word,m\nबिरौना,nonword,z\nअवसाद,word,m\nविभोणु,nonword,z\nमलाज़,nonword,z\nसदैव,word,m\nटगुधुंध,nonword,z\nकर्नत्रों,nonword,z\nसमायोजन,word,m\nसमर्पण,word,m\nअला,nonword,z\nअभ्यागत,word,m\nअमुक,word,m\nहरिक्यशेषण,nonword,z\nमनुष्य,word,m\nऋण,word,m\nनिष्कासित,word,m\nस्वालें,nonword,z\nप्राकृदीन,nonword,z\nअंततः,word,m\nअज्ञ,word,m\nकलावंत,word,m\nसंगीषुप्त,nonword,z\nजेस्कादारी,nonword,z\nअजपड़,nonword,z\nअंल,nonword,z\nदिमाना,nonword,z\nआवर्त,word,m\nबारान,nonword,z\nव्याहद,nonword,z\nआश्चर्य,word,m\nअलख,word,m\nरोद्यका,nonword,z\nजलाशय,word,m\nडाप,nonword,z\nकपीश,word,m\nअपजत,nonword,z\nज्वर,word,m\nकेषम्य,nonword,z\nटूर्ख,nonword,z\nआवेश,word,m\nधांघना,nonword,z\nप्रंकन,nonword,z\nसंदिष्का,nonword,z\nस्पर्धा,word,m\nकक्स,nonword,z\nफांथक,nonword,z\nइस्पात,word,m\nटकिरित,nonword,z\nमजाला,nonword,z\nसमृद्ध,word,m\nचाहिक,nonword,z\nफातना,nonword,z\nनिहित,word,m\nमनन,word,m\nप्रकोप,word,m\nधुंध,word,m\nवामने,nonword,z\nगोरिजीम,nonword,z\nऊब,word,m\nप्रविधि,word,m\nनीर,word,m\nचुनौपी,nonword,z\nव्युत्पत्ति,word,m\nशौबन,nonword,z\nजटिदी,nonword,z\nसोम,word,m\nविफल,word,m\nपरितुष्ट,word,m\nद्वार,word,m\nप्रतिदर्श,word,m\nरौवधात,nonword,z\nअजकाये,nonword,z\nआपारू,nonword,z\nजीचुक,nonword,z\nत्वचा,word,m\nमुखाग्नि,word,m\nनिष्ठुर,word,m\nशुश्रूषा,word,m\nहोभ,nonword,z\nअन्षिय,nonword,z\nप्रतिधाका,nonword,z\nतरकारी,word,m\nविरोश,nonword,z\nआंतराते,nonword,z\nकुमुलिड़ी,nonword,z\nथेद्वेतिक,nonword,z\nकलह,word,m\nभयवक्य,nonword,z\nयुगल,word,m\nरघुबाना,nonword,z\nरूहराते,nonword,z\nपपीहा,word,m\nसक्षम,word,m\nयुग्म,word,m\nवन्य,word,m\nउच्वाकता,nonword,z\nसमय,word,m\nप्रज्तिवादी,nonword,z\nदुनाता,nonword,z\nमौई,nonword,z\nभूतल,word,m\nधांडेर,nonword,z";

var pract_stim_1 = "stim,type,corrResp\nसर्वत्र,word,m\nआँगन,word,m\nगेंद,word,m\nसरौता,word,m\nपरिष्त,nonword,z\nअजवाइन,word,m\nवजह,word,m\nनिंध,nonword,z\n﻿हीब्त,nonword,z\nअनेजमीं,nonword,z\nवाषमरिय,nonword,z\nखनिज,word,m\nतालिनी,nonword,z\nअधिदेत,nonword,z";