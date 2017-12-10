var maintext=new Array();

/*
<br /> = &
*/
init_print = "";
maintext[0]="HELLO W3lc0m3 t0 p1zh4ck1ng.me!!&&";
maintext[1]="This wargame site is to grow newbie hacker.&";
maintext[2]="and Developed by PeNeKKKkkkk&";
maintext[3]="PLZ enjoy with us!&&&";
maintext[4]="[<<<accessid>>>Guest<<</accessid>>>>@localhost ~]#help&";
maintext[5]="=========================================&";
maintext[6]="[+]help for COMMAND&";
maintext[7]="<<<strong>>>login<<</strong>>> -> you can login&";
maintext[8]="<<<strong>>>join<<</strong>>> -> you can join this wargame&";
maintext[9]="<<<strong>>>info<<</strong>>> -> you can show informations of site&";
maintext[10]="<<<strong>>>help<<</strong>>> -> i will help u :)&";
maintext[11]="=========================================&&";
maintext[12]="<<<yellow>>>try ur self to enter the command like this :)<<</yellow>>>ㅎ&&"; //ㅎ 수정
maintext[13]="[<<<accessid>>>Guest<<</accessid>>>>@localhost ~]# ";
//maintext[12]="[$Guest%@localhost ~]# telnet plzhacking.me";

for (i=0; i<maintext.length; i++){
	init_print += maintext[i];}
var count=0;
var toPrint = "";



var printStartEnd = true;

function Terminal_Print(text){
	TerminalAble(false);
	if (printStartEnd == true) {
		printStartEnd = false;
		toPrint = text;
	}
	var start = setTimeout("Terminal_Print()", 7);
	inputTextValue = toPrint[count];

	if (toPrint[count] == "<" && toPrint[count+1] == "<" && toPrint[count+2] == "<" && toPrint[count+3] != "/"  ){
		temp_tagText = toPrint.substring(count, count+130);
        tagPosition = temp_tagText.search(">>>");
        tagName = temp_tagText.split('>>>')[0];
        tagName = "<" + tagName.split('<<<')[1] + ">";
        off_tagName = "</" + tagName;
        tagText = temp_tagText.substring(0,temp_tagText.length);
        tagText = tagText.split('<<</')[0];
        tagText = tagText.split('>>>')[1];
 		console.log(tagName);
 		console.log(off_tagName);
		 $('#terminal').append($(tagName, {
        id: 'tag',
        text: tagText
    	}));
count = count + 7 + tagName.length + tagText.length + off_tagName.length;


	} else if(inputTextValue == "&"){
	 	inputTextValue = "<br />"
		 $('#terminal').append($('<br />', {
   		}));
	} else {


 $('#terminal').html(function(i, text) {
    return text + inputTextValue;
	}); 
	}

        if(count > toPrint.length-2){
        	TerminalAble(true);
        	clearTimeout(start);

        } 

        count++;

}





$( document ).ready(function() {
Terminal_Print(init_print);
});

(function($){
    $.fn.setCursorToTextEnd = function() {
        var $initialVal = this.val();
        this.val($initialVal);
    };
})(jQuery);



function TerminalAble(onoff){
		$('#terminal').each(function(){
    	this.contentEditable = onoff;
	});

		placeCaretAtEnd(($('#terminal').get(0)));
		
}

function placeCaretAtEnd(el) {
    el.focus();
    if (typeof window.getSelection != "undefined"
            && typeof document.createRange != "undefined") {
        var range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    } else if (typeof document.body.createTextRange != "undefined") {
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.collapse(false);
        textRange.select();
    }
}

$('#terminal').bind("DOMSubtreeModified",function(){
  alert('changed');
});

var top_terminal = $('.terminal_top .terminal_frame');
var frame_terminal = $('.terminal_frame');

top_terminal.offset({left: 100, top: 75});

var drag  = { x: 0, y: 0, state: false };
var delta = { x: 0, y: 0 };

top_terminal.mousedown(function(e) {
	console.log("ss");
  if(!drag.state) {
    this.style.backgroundColor = '#f00';    
    drag.x = e.pageX;
    drag.y = e.pageY;
    drag.state = true;
  }
  return false;
});


top_terminal.mousemove(function(e) {
	console.log("ss");
  if(drag.state) {
      this.style.backgroundColor = '#f0f';
      
      delta.x = e.pageX - drag.x;
      delta.y = e.pageY - drag.y;    
      
      $('#log').text( e.pageX + ' ' + e.pageY + ' ' +
                      delta.x + ' ' + delta.y );

      var cur_offset = $(this).offset();
      
      $(frame_terminal).offset({left: (cur_offset.left + delta.x),
                      top:  (cur_offset.top  + delta.y)});

      drag.x = e.pageX;
      drag.y = e.pageY;
  }
});

top_terminal.mouseup(function() {
	console.log("ss");
  this.style.backgroundColor = '#808';    
  drag.state = false;
});

top_terminal.mouseout(function() {
	console.log("ss");
  top_terminal.mouseup();
});




