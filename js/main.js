$(function() {
	// toggle all variables
	$(".toggle_variables").click(function(){
		$(".variables h4").click();
	});

	// toggle all methods
	$(".toggle_methods").click(function(){
		$(".methods h4").click();
	});

	// api side bar
    $('.api .sidebar-nav').affix({
		offset:{
			top:0,
			bottom: 0
		}
    });


});