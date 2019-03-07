

$(document).ready(function(){


//Sets up the css for the key name
$('#keyname').css({'text-align':'center', 'font-size':'85px', 'margin':'0 auto' , 'top':'20px'});		

//When the user clicks the key, the text, or innerHTML, will show up. 
$(".c2").click(function(){
	$('#keyname').html("C");
});

$(".c-sharp2").click(function(){
	$('#keyname').html("C# / Db");
});


$(".d2").click(function(){
	$('#keyname').html("D");
});
$(".d-sharp2").click(function(){
	$('#keyname').html("D# / Eb");
});


$(".e2").click(function(){
	$('#keyname').html("E");
});

$(".f2").click(function(){
	$('#keyname').html("F");
});
$(".f-sharp2").click(function(){
	$('#keyname').html("F# / Gb");
});


$(".g2").click(function(){
	$('#keyname').html("G");
});
$(".g-sharp2").click(function(){
	$('#keyname').html("G# / Ab");
});


$(".a2").click(function(){
	$('#keyname').html("A");
});
$(".a-sharp2").click(function(){
	$('#keyname').html("A# / Bb");
});


$(".b2").click(function(){
	$('#keyname').html("B");
});

$(".c3").click(function(){
	$('#keyname').html("C");

});
$(".c-sharp3").click(function(){
	$('#keyname').html("C# / Db");
});

$(".d3").click(function(){
	$('#keyname').html("D");
});
$(".d-sharp3").click(function(){
	$('#keyname').html("D# / Eb");
});

$(".e3").click(function(){
	$('#keyname').html("E");
});

$(".f3").click(function(){
	$('#keyname').html("F");
});
$(".f-sharp3").click(function(){
	$('#keyname').html("F# / Gb");
});

$(".g3").click(function(){
	$('#keyname').html("G");
});
$(".g-sharp3").click(function(){
	$('#keyname').html("G# / Ab");
});
$(".a3").click(function(){
	$('#keyname').html("A");
});
$(".a-sharp3").click(function(){
	$('#keyname').html("A# / Bb");
});

$(".b3").click(function(){
	$('#keyname').html("B");
});

$(document).keydown(function(e){
	if (e.keyCode === 81){
		$('#keyname').html("C");
	};

	if (e.keyCode === 49){
		$('#keyname').html("C# / Db");
	};
	
	if (e.keyCode === 87){
		$('#keyname').html("D");
	};
	if (e.keyCode === 50){
		$('#keyname').html("D# / Eb");
	};
	if (e.keyCode === 69){
		$('#keyname').html("E");
	};
	if (e.keyCode === 82){
		$('#keyname').html("F");
	};
	if (e.keyCode === 51){
		$('#keyname').html("F# / Gb");
	};
	if (e.keyCode === 84){
		$('#keyname').html("G");
	};
	if (e.keyCode === 52){
		$('#keyname').html("G# / Ab");
	};
	if (e.keyCode === 89){
		$('#keyname').html("A");
	};
	if (e.keyCode === 85){
		$('#keyname').html("B");
	};
	if (e.keyCode === 65){
		$('#keyname').html("C");
	};
	if (e.keyCode === 54){
		$('#keyname').html("C# / Db");
	};
	
	if (e.keyCode === 83){
		$('#keyname').html("D");
	};
	if (e.keyCode === 55){
		$('#keyname').html("D# / Eb");
	};
	if (e.keyCode === 68){
		$('#keyname').html("E");
	};
	if (e.keyCode === 70){
		$('#keyname').html("F");
	};
	if (e.keyCode === 56){
		$('#keyname').html("F# / Gb");
	};
	if (e.keyCode === 71){
		$('#keyname').html("G");
	};
	if (e.keyCode === 57){
		$('#keyname').html("G# / Ab");
	};
	if (e.keyCode === 72){
		$('#keyname').html("A");
	};
	if (e.keyCode === 74){
		$('#keyname').html("B");
	};

	
});














});