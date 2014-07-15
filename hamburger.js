$(document).ready(function(){
	var ham = 0;
	var planetoggle = 0;

	$("#hamburger").click(function(){
		if(ham == 0){
			$(".hamburgerNav").animate({"height":"200px"},300);
			ham = 1;
		}
		else{
			$(".hamburgerNav").animate({"height":"0px"},300);
			ham = 0;
		}

	});
	$("#contactplane").click(function(){
		if(planetoggle == 0){
			$("#contactform").fadeIn();
			planetoggle = 1;
		}
		else{
			$("#contactform").fadeOut();
			planetoggle = 0;
		}
	});

});