//https://stackoverflow.com/questions/53021813/html-two-language-option-with-button-without-having-to-redirect-to-different-pa
function toggleLanguage() {
    curr_lang = document.getElementById("just_flag").innerHTML;
    if (curr_lang=='E') {
      just_flag.innerHTML = 'H'
      head1.innerHTML = "<strong>प्रोफ़ाइल</strong>"
      head2.innerHTML = "<strong>भाषा से संबंधित सवाल</strong>"
      line1.innerHTML = "कृपया शुरू करने से पहले नीचे दिए गए प्रश्नों को पूरा करें। यह शोध में हमारी बहुत मदद करेगा।"
      line2.innerHTML = "जहां भी आवश्यक हो कृपया स्लाइडर का उपयोग करें।"
      i0.innerHTML = "Change this to English"
      i00.innerHTML = "आपकी आई. डी."
      i1.innerHTML = "आपकी उम्र"
      i2.innerHTML = "अभी आप किस उच्च डिग्री के लिए काम कर रहे हैं या प्राप्त की है ?"
      i21.innerHTML = "प्राथमिक शिक्षा (आठवीं कक्षा तक)"
      i22.innerHTML = "माध्यमिक शिक्षा (10वीं कक्षा तक)"
      i23.innerHTML = "उच्च माध्यमिक शिक्षा (12वीं कक्षा तक)"
      i24.innerHTML = "स्नातक शिक्षा"
      i25.innerHTML = "स्नातकोत्तर शिक्षा"
      i26.innerHTML = "डॉक्टरेट"
      i27.innerHTML = "पोस्टडॉक"
      i3.innerHTML = "आपका लिंग"
      i31.innerHTML = "महिला"
      i32.innerHTML = "पुरुष"
      i33.innerHTML = "अन्य"
      i34.innerHTML = "मैं कहना नहीं चाहूँगा"
      i4.innerHTML = "आप कहां पले-बढ़े ?<br> <span class='text-info'><small style='font-size: 12px;'>अधिक राज्यों को देखने के लिए आगे स्क्रॉल करें।</small></span>"
      i5.innerHTML = "आप कौन सी भाषा सबसे अच्छी तरह जानते हैं (पहली भाषा) ?<br><span class='text-info'><small style='font-size: 12px;''>मातृभाषा/ मूल भाषा </small></span>"
      i6.innerHTML = "अपनी मातृभाषा को छोड़कर आप कौन सी अन्य भाषाएं जानते हैं ?"
      i61.innerHTML = "कृपया प्राथमिकता के क्रम में लिखें, सबसे परिचित से कम परिचित"
      i7.innerHTML = "आपकी हिन्दी कितनी अच्छी है (कृपया 1-10 में रेट करें) ?<br><span class='text-info'><small style='font-size: 12px;'>1-कोई ज्ञान नहीं, &nbsp; 10-सहज/ निपुण</small><br><strong>कृपया स्लाइडर का उपयोग करें</strong></small></span>"
      i71.innerHTML = "&nbsp;&bull;&nbsp;अपनी हिंदी बोलने की क्षमता का मूल्यांकन करें"
      i72.innerHTML = "&nbsp;&bull;&nbsp;अपनी हिंदी समझने की क्षमता का मूल्यांकन करें"
      i73.innerHTML = "&nbsp;&bull;&nbsp;अपनी हिंदी पढ़ने की क्षमता का मूल्यांकन करें"
      i74.innerHTML = "&nbsp;&bull;&nbsp;अपनी हिंदी लिखने की क्षमता का मूल्यांकन करें"
      i8.innerHTML = "वह उम्र जब आपने हिंदी सीखना शुरू किया था"
      i9.innerHTML = "हिन्दी के साथ आपका कुल कितने वर्षों का अनुभव है "
      i10.innerHTML = "आपने स्कूल/ कॉलेज में कुल कितने वर्षों तक हिन्दी विषय का अध्ययन किया है"
      i11.innerHTML = "प्रति दिन कितने घंटे आप हिंदी उपयोग में लेते हैं <br><span class='text-info'><small style='font-size: 12px;'>सब कुछ शामिल करें (पढ़ना/लिखना/संवाद करना)</small></span>"
      i12.innerHTML = "हिंदी विषय में अंतिम प्रतिशत/अंक (10वीं/ 12वीं/ कॉलेज)<br><span class='text-info'><small style='font-size: 12px;'>याद न होने पर आप अनुमानित अंक लिख सकते हैं</ small></span>"
      i13.innerHTML = "आपने कुल कितने वर्ष हिंदी भाषी क्षेत्र में निवास किया"
      i14.innerHTML = "मैं शोध के लिए अपना डेटा साझा करने के की सहमति देता/ देती हूँ"
      i141.innerHTML = "&nbsp;&nbsp;हाँ"
      i142.innerHTML = "&nbsp;&nbsp;नहीं"
      i15.innerHTML = "अध्ययन के दौरान शिक्षा का माध्यम हिंदी था?"
    }
    else {
      just_flag.innerHTML = 'E'
      head1.innerHTML = "Profile";
      head2.innerHTML = "Language Related Questions";
      line1.innerHTML = "Please complete the following questions before you start. It will help us immensely in research study.";
      line2.innerHTML = "Please use sliders wherever necessary.";
      i0.innerHTML = "इसे हिंदी में बदलें"
      i00.innerHTML = "Participation ID (auto)"
      i1.innerHTML = "Your age"
      i2.innerHTML = "What is the highest degree you are currently working towards or obtained ?"
      i21.innerHTML = "Primary school (upto class 8th)"
      i22.innerHTML = "Secondary school (upto class 10th)"
      i23.innerHTML = "Higher secondary (upto class 12th)"
      i24.innerHTML = "Graduation - Bachelor"
      i25.innerHTML = "Postgraduation - Master"
      i26.innerHTML = "Doctorate"
      i27.innerHTML = "Postdoc"
      i3.innerHTML = "Your gender"
      i31.innerHTML = "Female"
      i32.innerHTML = "Male"
      i33.innerHTML = "Others"
      i34.innerHTML = "Rather not say"
      i4.innerHTML = "Where did you grow up ?<br> <span class='text-info'><small style='font-size: 12px;'>Scroll further to see more states</small></span>"
      i5.innerHTML = "Which language do you know best (first language) ?<br><span class='text-info'><small style='font-size: 12px;'>Native language/ mother tongue</small></span>"
      i6.innerHTML = "What are the other languages that you know ? (apart your mother tongue)"
      i61.innerHTML = "Please write in priority order, from most familiar to least familiar"
      i7.innerHTML = "How good is your Hindi? (please rate 1-10)<br><span class='text-info'><small style='font-size: 12px;'>1-No knowlege, &nbsp; 10-Fluent/ Expert<br><strong>Please use the slider for response</strong></small></span>"
      i71.innerHTML = "&nbsp;&bull;&nbsp;Rate your ability to speak Hindi"
      i72.innerHTML = "&nbsp;&bull;&nbsp;Rate your ability to understand Hindi"
      i73.innerHTML = "&nbsp;&bull;&nbsp;Rate your ability to read Hindi"
      i74.innerHTML = "&nbsp;&bull;&nbsp;Rate your ability to write Hindi"
      i8.innerHTML = "Age when you started learning Hindi"
      i9.innerHTML = "Number of years of experience with Hindi"
      i10.innerHTML = "Number of years you studied Hindi subject in school/ college"
      i11.innerHTML = "Approx. number of hours spent per day using of Hindi <br><span class='text-info'><small style='font-size: 12px;'>Sum up all (reading/ writing/ communicating)</small></span>"
      i12.innerHTML = "Last percentage/ marks in Hindi subject (10th/ 12th/ college)<br><span class='text-info'><small style='font-size: 12px;''>You can put approximate marks if do not remember</small></span>"
      i13.innerHTML = "Total number of years lived in Hindi speaking region"
      i14.innerHTML = "I agree to share my data for research"
      i141.innerHTML = "&nbsp;&nbsp;Yes"
      i142.innerHTML = "&nbsp;&nbsp;No"
      i15.innerHTML = "Medium of instruction was Hindi during education ?"
    }
  };

// Original JavaScript code by Chirp Internet: chirpinternet.eu
// Please acknowledge use of this code by including this header.
var today = new Date();
var expiry = new Date(today.getTime() + 30*24*3600*1000*3); // plus 30 days
var cookjson;

function make_pid() {
  var makeid = (length) => {
      var result           = '';
      var characters       = 'ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength)); }
     return result; }

  //today = new Date();
  year  = today.getFullYear();
  month = (today.getMonth() + 1).toString().padStart(2, "0");
  day   = today.getDate().toString().padStart(2, "0");
  hrs   = today.getHours().toString().padStart(2, "0");
  mins  = today.getMinutes().toString().padStart(2, "0")
  secs  = today.getSeconds().toString().padStart(2, "0")
  ms    = today.getMilliseconds().toString().padStart(4,"0")

  pid = 'LexT_'+year+month+day+'_'+hrs+mins+secs+ms+'_'+makeid(7);
  pid_show = pid.slice(0,4) + pid.slice(24,32);
}

function hide_forms() {
  $("#head2").css("display", "None");
  $("#line2").css("display", "None");
  $(".form-control").css("display", "None");
  $(".form-check-input").css("display", "None");
  $("#help").css("display", "None");
  $(".inp").css("display", "None");
  $("#tickmarks").css("display", "None");
  $(".form-group").css("display", "None");
  $("#clear").css("display", "");
  $("#start").css("display", "");
  $("#pid_head").css("display", "");
  $("#pid_auto").css("display", "");
}

function getCookie(name) {
	var re = new RegExp(name + "=([^;]+)");
	var value = re.exec(document.cookie);
	return (value != null) ? unescape(value[1]) : null;
}

function setCookie(name, value) {
	document.cookie=name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
}

function clearCookies() {
	document.cookie.split(";").forEach(function(c) { 
		document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
	$("#myAlert2").css("display", "None");
	$("#head2").css("display", "");
  $("#line2").css("display", "");
	$(".form-control").css("display", "");
	$(".form-check-input").css("display", "");
	$("#help").css("display", "");
	$(".inp").css("display", "");
	$("#tickmarks").css("display", "");
	$(".form-group").css("display", "");
	$("#clear").css("display", "None");
	$("#start").css("display", "None");
	$(".form-group").css("display", "");
}

function saveData(filename, dir, data){
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'scripts_jscssphp/save1_xmlhttp.php');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({filename: filename, directory: dir, filedata: data}));
}

function save_data_csv(f_name, dir, data) {
  jQuery.ajax({type: 'post', cache: false, url: 'scripts_jscssphp/save2_jquery.php',
      data: { data_dir: dir,
        file_name: f_name + '.csv', // the file type should be added
        exp_data: data }
      });
}

function str_obj(str) {
    str = str.split(';');
    var result = {};
    for (var i = 0; i < str.length; i++) {
        var cur = str[i].split('=');
        result[cur[0]] = cur[1];
    }
    return result;
}

function save_and_hide() {
  if(form1.reportValidity()) {
    console.log("Valid data");
    datLBQ = {PartID:pid, age:form1.cook1_age.value, education:form1.cook2_edu.value, gender:form1.cook3_gen.value, state:form1.cook4_stat.value, nativeLang:form1.cook5_nat.value.replaceAll(',','-').replaceAll(' ','').replaceAll(';','-'), otherLang:form1.cook6_oth.value.replaceAll(',','-').replaceAll(' ','').replaceAll(';','-'), rateHindi:form1.cook7_knw.value, rateSpeak:form1.cook71_speak.value, rateUnd:form1.cook72_understand.value, rateRead:form1.cook73_read.value, rateWrite:form1.cook74_write.value, age_acq:form1.cook8_age.value, experienceHi:form1.cook9_exp.value, formalEduHi:form1.cook10_stud.value, hrsPerDay:form1.cook11_day.value, obtMks:form1.cook12_obt.value, maxMks:form1.cook12_max.value, yrsLivedHi:form1.cook13_exp.value, consent:form1.cook14.value, hiMedium:form1.cook15_med.value };
    datLBQ = JSON.stringify(datLBQ);
    datLBQ = datLBQ.replaceAll(",",";").replaceAll('"','').replaceAll(":","=");
    datLBQ = datLBQ.slice(1, datLBQ.length-1);
    
    csv_imp = cook_to_csv(datLBQ);
    csv_clnt = cook_to_csv(merged);
    csv_all = csv_imp+'\n'+csv_clnt;

    setCookie("cook_ClientProfID", pid);
    
    saveData('imp_'+pid+'.txt',"data_profile",csv_imp); 
    saveData('all_'+pid+'.txt',"data_profile",csv_all);
    
    hide_forms();
    $("#myAlert1").css("display", "");
  }
  else {
    console.log("Invalid data");
    //alert("Something is missing from profile data. Please check.");  
  }
}

function updateRangeInput(elem) {
  $(elem).next().val($(elem).val());
}

function cook_to_csv(cook) {
  cookjson = cook.split(";")
  var arr = new Array();
  for (var i = 0; i < cookjson.length; i++) {
    temp = cookjson[i].split('=');
    arr.push(temp);
  }
  arr = JSON.stringify(arr);
  arr = arr.replaceAll('"],["','\n');
  arr = arr.replaceAll('","',',');
  arr = arr.replaceAll('[["','');
  arr = arr.replaceAll('"]]','');
  return arr;
}