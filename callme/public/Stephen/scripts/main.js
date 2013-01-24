require.config({
	shim: {},
	paths: {
		hm: 'vendor/hm',
		esprima: 'vendor/esprima',
		jquery: 'vendor/jquery.min'
	}
});
require(['app'], function(app) {
	// use app here
	console.log(app);
});
$(document).ready(function() {
	// Load tooltips
	$('.tooltip2').tooltip('hide')
	// Load popovers
	$('.popover2').popover('hide')
	
	$("a[rel=popover]").click(function(event){
    if(event.which == 1)
    {   
        $thisPopOver = $(this);
        $thisPopOver.popover('toggle');
        $thisPopOver.parent("li").click(function(event){
            event.stopPropagation();
            $("html").click(function(){
                $thisPopOver.popover('hide');
            });
        });
    }
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



$(function() {
  $('rel["clickover"]').clickover();
});
	