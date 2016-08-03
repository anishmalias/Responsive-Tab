// JavaScript Document

	
/*  code developed by Anish.
 	http://codehints.in
*/

	$(function(){
		
		 console.log("Welcome, its a beta version");
		 
		 
		 /*--- get tab item count ---*/
		 $(window).load(function(){
			 $(".ul-tabs > li").each(function(){
				var count = $(this).index();
				//console.log(count);
				$(this).attr("data-target",'' + count + '');
				//$('.tab-item[id=' + self.attr('data-target') +']').show();
				var itemData = $(this).attr("data-target",'' + count + '').text();
				console.log(itemData);
				//$(".tab-wrapper > div")
				var setCurrent = $(this);
				$('.tab-wrapper > div[id=' + setCurrent.attr('data-target') +']').before('<h2 class="accordian-header">'+ itemData +' </h2>');
			 });
		 });
		 
		 $(".tab-wrapper > div").each(function(){
			var tabContentCount = $(this).index();
			//console.log(tabContentCount);
			$(this).attr("id",'' + tabContentCount + '');
		 });
		 
		 $(".ul-tabs > li").click(function(){
			var self = $(this);
			$(".ul-tabs > li").removeClass("active-tab");
			$(this).addClass("active-tab");
			$(".tab-wrapper > div").hide();
			$('.tab-wrapper > div[id=' + self.attr('data-target') +']').show();
			
		 });
		
		 
		 function accordianClick() { 
			var allAccordions = $('.tab-item'); 
			var allAccordionItems = $('.accordian-header'); 
			$('.accordian-header').live('click',function() {
													   
				if($(this).hasClass('open')) { 
					$(this).removeClass('open'); 
					$(this).next().slideUp("slow"); 
					
					} else { 
					
					allAccordions.slideUp("slow"); 
					allAccordionItems.removeClass('open'); 
					$(this).addClass('open'); 
					$(this).next().slideDown("slow"); 
					return false; 
					} 
				}); 
		 }
		 $(window).load(function(){
		 	accordianClick();
		 });
		 
		 
		 
	});