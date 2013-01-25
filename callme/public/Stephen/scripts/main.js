$(document).ready(function() {
	
	document.body.style.overflow = 'hidden';
	
	// Load tooltips
	$('.tooltip2').tooltip('hide')
	// Load popovers

	
	
	$('.popover2').popover({
	    html: true,
	    trigger: 'hover',
	});




	
	
	

	$('.modal2').click(function() {
	  $('.popover2').popover('hide');
	  $('#invitePop').popover('hide');
	  $('#sharePopover').popover('hide');
	});
	
	
	// Show pin button on textarea focus
	$('#createNote').focus(function() {
	  $('.pinTools').removeClass('hide');
	});
	
	$('#createNote').focusout(function() {
	  $('.pinTools').addClass('hide');
	});
	
	
	// Add class to share popover
	
	
	    $('#sharePopover')
		    		    
		    .popover({
		        placement : 'bottom',
		        html : true,
		        title : 'Paste this code on your site or blog.',
		        placement : 'bottom',
		        trigger : 'click',
		        content : "<h6>Paste this code on your site or blog</h6><form><textarea class='code'><iframe width='560' height='315' src='https://sunglass.io/player/e5b78dc8-150c-4a19-9f02-36763f80ac5b' frameborder='0' allowfullscreen mozallowfullscreen webkitallowfullscreen></iframe></textarea><div class='clearfix'><div class='btn-group pull-left'><a class='btn btn-small dropdown-toggle' data-toggle='dropdown' href='#'>Size <span class='caret'></span></a><ul class='dropdown-menu'><li><a href='#'>560x315</a></li><li><a href='#'>640x360</a></li><li><a href='#'>850x480</a></li><li><a href='#'>1280x720</a></li><li><a href='#'>Custom</a></li></ul></div><a href='#' class='btn pull-right btn-small'>Copy</a></div></form>"
		  })
		  .click(function() {
		
		$('.popover').addClass('sharePopWin');
		$('#invitePop').popover('hide')
		
	})
	
		

		  
		  $('#invitePop').click(function() { 
			  $('#sharePopover').popover('hide')
		  })
		  .popover({
			  placement : 'bottom',
		        html : true,
		        title : 'Paste this code on your site or blog.',
		        placement : 'bottom',
		        trigger : 'click',
		        content : "<form><input class='input-block-level' placeholder='email' type='email'><p>Search for a person in Sunglass by name or email address, or enter an email address to invite someone new.</p><a href='#' class='btn btn-success btn-block'>Send Invitations</a></form>"
		  })
		  
});

		  
		  //Fix for team drop down menu and close function conflict

	
		$('#team .dropdown-toggle').click(function() {
			$('#team.collapse.in').addClass('overflowVisible')
			
		})
		
		$('.hide-module').click(function() {
			$('#team.collapse.in').removeClass('overflowVisible')
			
		})
	

	
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





	