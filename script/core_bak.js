var maintext=new Array();

/*
<accessID>  = $
</accessID> = %
<br /> = &
*/
text = "";
maintext[0]="HELLO W3lc0m3 t0 p1zh4ck1ng.me!!&&";
maintext[1]="This wargame site is to grow newbie hacker.&";
maintext[2]="and Developed by PeNeKKKkkkk&";
maintext[3]="PLZ enjoy with us!&&&";
maintext[4]="[$Guest%@localhost ~]# help&";
maintext[5]="=========================================&";
maintext[6]="[+]help for COMMAND&";
maintext[7]="login -> you can login&";
maintext[8]="join -> you can join this wargame&";
maintext[9]="info -> you can show informations of site&";
maintext[10]="help -> i will help u :)&";
maintext[11]="=========================================&";
//maintext[12]="[$Guest%@localhost ~]# telnet plzhacking.me";

for (i=0; i<maintext.length; i++){
	text += maintext[i];
	 	console.log(maintext[i]);
}
var count=0;
var tag=0;



function startfunc(){
	var start = setTimeout("startfunc()", 7);
	inputTextValue = text[count];

	if (inputTextValue == "$"){
		inputTextValue = "<accessid>";
		test = text.substring(0, text.length);
        gotit = test.search("%",tag+1);
        tag++;
		 $('#terminal').append($('<accessid>', {
        id: 'myid',
        title: 'Hello world?',
        text: text.substring(count+1, gotit)
    	}));

		 count = gotit;

	} else
	if (inputTextValue == "%"){
		inputTextValue = "</accessid>"
		 $('#terminal').append($('</accessid>', {
   		}));

	} else if(inputTextValue == "&"){
	 	inputTextValue = "<br />"
		 $('#terminal').append($('<br />', {
   		}));
	} else {


 $('#terminal').html(function(i, text) {
    return text + inputTextValue;
	}); 
	}

        if(count > text.length-2){
        	clearTimeout(start);
        } 

        count++;

}





$( document ).ready(function() {
startfunc();
$('.editable').each(function(){
    this.contentEditable = true;
});

});


