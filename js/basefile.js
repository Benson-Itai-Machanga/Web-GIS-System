//showing sub elements
document.addEventListener('DOMContentLoaded', function() {
    var subElements = $('.side-bar-elements');
    	subElements.click(function() {
    	$('.sub-elements').css("display","none");
    	$("#side-bar").css("width","16%");	
    	$("#side-bar").css("transition","0.5s ease");
        $('#'+$(this).attr('target')).toggle('active');
        $(".title").show();
    });
});
//minimizing side bar by clicling button
$("#minimize").click(function() {
	if ($("#side-bar").css("width","3.5%")==true) 
		{
			$("#side-bar").css("width","16%");	
			$("#side-bar").css("transition","0.5s ease");
			$(".side-bar-elements").show();
			// $(".icons").show();
		    $(".title").show();
		} 
//maximizing side bar		
	else 
	{
		$("#side-bar").css("width","3.5%");
		$("#side-bar").css("transition","0.5s ease");
		$(".sub-elements").css("display","none");
		$(".icons").show();
		$(".title").hide();
	}
}) 
//toggle profile selections
document.addEventListener('DOMContentLoaded', function() {
    var profileIn = $('.user-icons');
    profileIn.click(function() {
    	$(".map").hide();
		$("#bottom-div").show();
        $("#profile-info-bar").toggle('active');
        $("#notification-info-bar").hide();
    });
});
//toggle notification
document.addEventListener('DOMContentLoaded', function() {
    var notification = $('.notification-icons');
    notification.click(function() {
        $("#notification-info-bar").toggle('active');
        $("#profile-info-bar").hide();
    });
    
});

