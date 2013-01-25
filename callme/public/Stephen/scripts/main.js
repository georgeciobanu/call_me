$(document).ready(function() {
	// Load tooltips
	$('.tooltip2').tooltip('hide')
	// Load popovers
	$('.popover2').popover({ 
		trigger: "hover",
		delay: 300, 
	})
	
	$('.popover3').popover({ 
		trigger: "click",
		delay: 100, 
	})
	
	$('.modal2').click(function() {
	  $('.popover2').popover('hide');
	});
	
	
	// Show pin button on textarea focus
	$('#createNote').focus(function() {
	  $('.pinTools').removeClass('hide');
	});
	
	$('#createNote').focusout(function() {
	  $('.pinTools').addClass('hide');
	});
	
	
	$('.userThumb').click(function() {
	  $('.userDetail').toggleClass('hide');
	});
	
	
	
	
	//Hide Module Button
	$('.hide-module').click('hide')
	var bodyheight = $(document).height();
	$(".sidePanel").height(bodyheight);
	
	
	//Typeahead
	var subjects = ['Status Open', 'Status Close', 'Assigned to John Doe', 'Assigned to Bill McCoy', 'Assigned to John Malkovich', 'Due Today', 'Due Tomorrow', 'Due Next Week', 'Past Due', 'Tag A', 'Tag B', 'Tag C', 'is pinned', 'is not pinned'];
	$('#search').typeahead({
		source: subjects
	})
	// Add Space Button in top nav
	$("#addSpace").click(function() {
		$(this).addClass("hide");
		$("#addSpaceInput").removeClass("hide");
	});
	
	$("#addSpaceInput .close").click(function() {
		$("#addSpaceInput").addClass("hide");
		$("#addSpace").removeClass("hide");
	});
})




	