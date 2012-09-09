
// Debugging box
$('#box3').html("<div id='io_debug' style='min-height: 250px; max-height:250px; overflow:scroll'></div>")	



    //Turn the entire list into right/middle-clickable URLs
$(".disableFilters").click(function(){
	word_filters = {};
	Cookie.createCookie("r_animu_disable_filters", "true");
	Message.each(function(m){if(m && m.oldMsg){m.msg = m.oldMsg;}console.log(m);});
	Message && Message.clear();
	window.sp && window.sp.messages && window.sp.messages.addAll();	
});
$(".enableFilters").click(function() {
	Cookie.eraseCookie("r_animu_disable_filters");
	setupFilters();
	Message && Message.clear();
	window.sp && window.sp.messages && window.sp.messages.addAll();		
});
$(".linkify").click(function() {
$('#playlist .items li').each(function() {var id = $(this).attr('id').replace('media_', ''); var vid = Media.records[id]; if(vid.mtype === 'yt') {var url = 'http://www.youtube.com/watch?v='+vid.mid;console.log(url); var title = $(".title", this).html(); title = '<a target="_blank" class="play title" href="'+url+'">'+title+'</a>'; console.log(title); $(".title", this).html(title);}})
});




     function removeElement(id) {
  var element = document.getElementById(id);
  element.parentNode.removeChild(element);
}

var descr = 

'<link href="http://vidya4chan.com//thewayitiss.css" rel="stylesheet" type="text/css" />'+
'<div class="customTheme"><link href="#" rel="stylesheet" /></div>' +
'<div id="wrap">'+
'<strong>&nbsp;/v/&#39;s Official Room.</strong><br />'+
'<p>In the interests of keeping things running smoothly please don&#39;t add static videos or music unless it actually has a video to go with it. My Little Pony and furry shit is a NOPE. Playlist is always unlocked, <span style="color:#99cc33;">&gt;unlike all the other rooms with power tripping mods</span>.</p>'+
'<strong><span style="color:#ff8c00;"><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=CZVS3FRNZVZU4">Click here to be a mod by donating</a></span></strong>'+
'<span style="color:#ff0000;"><strong>WE CHAN NOW</strong></span> <a href="http://Vidya4chan.com">http://Vidya4chan.com</a>'+
' <ul class="themes">' +
' <br>' +
'<center><a href="#full"> <img src="http://vidya4chan.com/1.png" alt="Fullscreen" /> </a>'+
'<a href="#night"> <img src="http://vidya4chan.com/2.png" alt="Blue" /> </a>'+
' <a href="#yotsuba"> <img src="http://vidya4chan.com/3.png" alt="Yotsuba" /> </a>'+
' <a href="#themeEmpty"> <img src="http://vidya4chan.com/off.png" alt="turn themes off" /> </a></center>'+
' </ul>'+ 
'</div>'
;

$("#description .description").html(descr);

 //Theme switch
$("ul.themes a").click(function(){
var theme = $(this).attr("href");
themSwitch(theme);	
console.log("set to" + theme);


});


function themSwitch(theme)
{
switch(theme){
case "#themeEmpty" :
$(".customTheme link[rel=stylesheet]").attr({href : "#"} );
break;
case "#Based" :
$(".customTheme link[rel=stylesheet]").attr({href : "//vidya4chan.com/qq.css"} );
break;
case "#d" :
$(".customTheme link[rel=stylesheet]").attr({href : "//tntpowerhost.com/~wicked6/pink.css"} );
break;
case "#yotsuba" :
$(".customTheme link[rel=stylesheet]").attr({href : "//vidya4chan.com/yotsuba.css"} );
break;
case "#full" :
$(".customTheme link[rel=stylesheet]").attr({href : "//dl.dropbox.com/s/89zr5ouf1z2s0du/xmovie.css"} );
break;
case "#night" :
$(".customTheme link[rel=stylesheet]").attr({href : "//vidya4chan.com/night.css"} );
break;
case "#blue" :
$(".customTheme link[rel=stylesheet]").attr({href : "//vidya4chan.com/yotsubab.css"} );
break;




}
}









function loadExternalJS() {
  //vidya4chan
  

  
  var facecodes = {
  	
   '|': '',
    
	   'https://boards.4chan.org/pol/res/5280322': 'I am a fucking loser',
   ':go::go::go::go::go::go:': '',
   ':alien::alien::alien::alien::alien::alien:': '',
    ':dolan:': '<img src="http://vidya4chan.com/dooktart.png" width="44" height="45">',
	':Dolan:': '<img src="http://vidya4chan.com/dooktart.png" width="44" height="45">',
 ':ready:': '<img src="http://vidya4chan.com/ready.gif" width="43" height="59">',
':usa:': '<img src="http://i.imgur.com/tSXNh.gif" width="60" height="42">',
 ':birry:': '<img src="http://vidya4chan.com/ztop.gif" width="33" height="53">',
  ':dog:': '<img src="http://i.imgur.com/OcGfN.gif" width="53" height="53">',
 '=/': '<img src="http://vidya4chan.com/gp.png" width="25" height="25">',
':gaben:': '<img src="http://vidya4chan.com/wgabe.png" width="50" height="54">',
':3:': '<img src="http://vidya4chan.com/seal.png" width="35" height="36">',
':feelsgud:': '<img src="http://i.imgur.com/BZ3WF.png" width="40" height="37">',
':burd:': '<img src="http://vidya4chan.com/birdy.gif" width="35" height="36">',
':snoop:': '<img src="http://vidya4chan.com/snoop.gif" width="23" height="50">',
 ':jimmies:': '<img src="http://vidya4chan.com/jimmy.gif" width="35" height="38">',
  ':sanic:': '<img src="http://vidya4chan.com/sonicx.png" width="50" height="45">',
 ':america:': '<img src="http://vidya4chan.com/111.gif" width="36" height="56">',
 ':dilbert:': '<img src="http://vidya4chan.com/dilbert.gif" width="56" height="55">',
 ':loading:': '<img src="http://i.imgur.com/LpBOu.gif" width="53" height="54">',
':deepdarkfantasy:': '<img src="http://vidya4chan.com/fantasy.gif" width="33" height="53">',	
':satan:': '<img src="http://vidya4chan.com/callofduty.gif" width="43" height="54">',	
':bioware:': '<img src="http://vidya4chan.com/biogurl.gif" width="41" height="48">',	
':shazbot:': '<img src="http://vidya4chan.com/33.png" width="41" height="48">',	
':reddit:': '<img src="http://i.imgur.com/wKaFk.png" width="80" height="16">',	
':bestkorea:': '<img src="http://vidya4chan.com/kim.gif" width="43" height="54">',						
':assntitties:': '<img src="http://i.imgur.com/CALcK.png" width="38" height="42">',				
':hitoame:': '<img src="http://vidya4chan.com/shower.gif" width="55" height="50">',
':penis:': '<img src="http://i.imgur.com/VorSn.gif" width="50" height="58">',
':duane::duane::duane::duane::duane::duane::duane::duane::duane::duane::duane::duane::duane::duane::duane::duane::duane::duane::duane::duane::duane::duane::duane::duane::duane::duane::duane:': 'i am a faggot',
':duane:': '<img src="http://vidya4chan.com/duane.gif" width="70" height="47">',
':plzgo:': '<img src="http://vidya4chan.com/hoho.png" width="46" height="55">',

':keke:': '<img src="http://vidya4chan.com/keke6.png" width="43" height="44">',
':uncle:': '<img src="http://vidya4chan.com/VffoS.jpg" width="44" height="52">',
':reshiram:': '<img src="http://vidya4chan.com/ee.gif" width="44" height="50">',
':push:': '<img src="http://vidya4chan.com/push.gif" width="43" height="49">',
':autism:': '<img src="http://vidya4chan.com/b.gif" width="55" height="55">',
':juggalo:': '<img src="http://vidya4chan.com/ll.gif" width="43" height="49">',
':stanza:': '<img src="http://vidya4chan.com/heh.png" width="41" height="58">',
':bestgames:': '<img src="http://vidya4chan.com/pstriple.png" width="48" height="54">',
':gamestop:': '<img src="http://vidya4chan.com/spekettle.gif" width="65" height="33">',
':o:': '<img src="http://vidya4chan.com/oz.gif" width="34" height="34">',
':fothegrove:': '<img src="http://vidya4chan.com/grove.gif" width="34" height="34">',
':aliens:': '<img src="http://vidya4chan.com/aliens.gif" width="50" height="57">',
':go:': '<img src="http://vidya4chan.com/zgo.gif" width="50" height="38">',
':pomf:': '<img src="http://vidya4chan.com/pomf.png" width="41" height="46">',

':kreayshawn:': '<img src="http://vidya4chan.com/kray.png" width="41" height="51">',
':bodywash:': '<img src="http://vidya4chan.com/bodywash.png" width="41" height="51">',
':goblinu:': '<img src="http://vidya4chan.com/zgobz.jpg" width="55" height="38">',

':nogaems:': '<img src="http://vidya4chan.com/nogames.gif" width="47" height="57">',

':feel:': '<img src="http://i.imgur.com/4lwg0.png" width="40" height="37">',


':alien:': '<img src="http://vidya4chan.com/ssd.gif" width="40" height="60">',

':bomb:': '<img src="http://i.imgur.com/1Ri01.png" width="30" height="44">',



'Cleverbot': 'Vidya4ChanBot',


':pimpin:': '<img src="http://i.imgur.com/sXZiA.gif" width="60" height="42">',
':2spooky4me:': '<img src="http://vidya4chan.com/spooky.gif" width="80" height="20">',

':2spooky:': '<img src="http://vidya4chan.com/spooky.gif" width="80" height="20">',


':gooby:': '<img src="http://vidya4chan.com/o2XNE.jpg" width="55" height="54">',

':dosh:': '<img src="http://vidya4chan.com/dsdasd.png" width="50" height="58">',





':jimmies::jimmies::jimmies::jimmies::jimmies::jimmies::jimmies::jimmies::jimmies::jimmies::jimmies::jimmies::jimmies::jimmies::jimmies::jimmies::jimmies::jimmies::jimmies::jimmies::jimmies::jimmies:': '',


':8bitdose:': '<img src="http://vidya4chan.com/wee2.gif" width="46" height="42">',
'vidyaTube': 'I am a faggot',
'VidyaTube': 'I am a faggot',
':costanza:': '<img src="http://vidya4chan.com/heh.png" width="41" height="58">',
 'synchtube.': " ",
'Wolfram Alpha': "vidya4chanbot",



'synchtu.be': "",
     ':knuckles:' : '<marquee  behavior="scroll" direction="up">',
		        ':knuckles:' : '<marquee  behavior="scroll" direction="up">',
        ':knuckles:' : '<span style="color:tomato">',
		 ':pacman:' : '<span style="color:yellow">',
		 ':sonic:' : '<span style="color:blue">',
		   ':krystal:' : '<span style="color:darkblue">',
		':squirtle:' : '<span style="color:cyan">',
		 ':mario:' : '<span style="color:red">',
		':link:' : '<span style="color:green">',
		':halo2:' : '<span style="color:darkgreen">',
		':kirby:' : '<span style="color:violet">',
		  ':nights:' : '<span style="color:purple">',
		 ':crashbandicoot:' : '<span style="color:orange">',
		  ':spyro:' : '<span style="color:blueviolet">',
		    ':starfox:' : '<span style="color:brown">',
			 ':birdo:' : '<span style="color:deeppink">',
			   ':chao:' : '<span style="color:aqua">',
			    ':bigthecat:' : '<span style="color:indigo">',
				     ':orange:' : '<span style="color:orange">',
					   ':tomba:' : '<span style="color:pink">',
					     ':tomnook:' : '<span style="color:chocolate">',
						     ':gex:' : '<span style="color:yellowgreen">',
							  ':liara:' : '<span style="color:steelblue">',
							    ':metalgear:' : '<span style="color:silver">',
								    ':wakeupmrfreeman:' : '<span style="color:tan">',
									  ':bluebomber:' : '<span style="color:royalblue">',
									  	  'img onerror' : 'script',
							 
  };



  var showfcmenu = false;
  
 helpers.animateEmotes = function(el) { 
  message_chat = ' '+el.html()+' ';
  var spam_test = message_chat.split(":");
    
      if (spam_test.length < 7) {
  $.each(facecodes, function(code, image) {
regexp = new RegExp(code,'g');

message_chat = message_chat.replace(regexp, image);
  }); }
  el.html(message_chat);
    };

	$('.controls').append('<br>');
	
	var menuHTML = '';
	var menuCount = 0;
	$.each(facecodes, function(code, image) {
		menuHTML = menuHTML+ '<a href="#" onclick="addFaceCode(\''+code+'\')">'+image+'</a> ';
		menuCount = menuCount+1;
		if(menuCount == 7) {
			menuCount = 0;
			menuHTML = menuHTML+'<br>';
		}
	  });
	
	$('#chat').append('<div id="facecodesmenu" class="hide" style="position:absolute;left:5px;top:5px;z-index:1;background-color:#FFFFFF;">'+menuHTML+'</div>');
	
	$("#showfacecodes").click(function() {
	  if(showfcmenu == false) {
		$("#facecodesmenu").removeClass('hide');
		showfcmenu = true;
	  }else{
	    $("#facecodesmenu").addClass('hide');
		showfcmenu = false;
	  }
	});
	
	jQuery.fn.extend({
	insertAtCaret: function(myValue){
	  return this.each(function(i) {
		if (document.selection) {
		  //For browsers like Internet Explorer
		  this.focus();
		  sel = document.selection.createRange();
		  sel.text = myValue;
		  this.focus();
		}
		else if (this.selectionStart || this.selectionStart == '0') {
		  //For browsers like Firefox and Webkit based
		  var startPos = this.selectionStart;
		  var endPos = this.selectionEnd;
		  var scrollTop = this.scrollTop;
		  this.value = this.value.substring(0, startPos)+myValue+this.value.substring(endPos,this.value.length);
		  this.focus();
		  this.selectionStart = startPos + myValue.length;
		  this.selectionEnd = startPos + myValue.length;
		  this.scrollTop = scrollTop;
		} else {
		  this.value += myValue;
		  this.focus();
		}
	  })
	}
	});
	
	addFaceCode = function (code) {
		$("#facecodesmenu").addClass('hide');
		showfcmenu = false;
		//$('#cin').val($('#cin').val()+' '+code);
		$('#cin').insertAtCaret(code);
	};
	
}




setTimeout(loadExternalJS, 3000);


// --------------------------------------------------
// sanitizeMedia by Desuwa
    function sanitize(s) {
        return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/["']/g, '&quot;');
    }
    function sanitizeMedia(m) {
        for(field in m) {
            if(typeof(m[field]) === 'string') {
                val = m[field]
                console.log("Sanitizing %s", val);
                m[field] = sanitize(val);
            }
        }        
    }
     
    Media.create = _.wrap(Media.create, function() {
        fn = arguments[0];
        J  = arguments[1];
        sanitizeMedia(J);
        return fn.apply(Media, _.rest(arguments));
    });

//------------------------------------


$(document).ready(function () {

 $(".webcam").replaceWith('<div class="webcamx"><a href="http://tinychat.com/v4c/" target="_blank"><img src="http://i.imgur.com/cUfOF.png"></a></div>')
 
$("#logo").replaceWith('<div id="logo"><a href="http://www.synchtube.com/"> <img src="http://i.imgur.com/DlZXK.png"></a></div>')

});




